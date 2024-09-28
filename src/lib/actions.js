"use server";

import { createCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData) {

export async function createComment(prevState, { postId, parentId, formData }) {
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[slug]");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
   }
}
