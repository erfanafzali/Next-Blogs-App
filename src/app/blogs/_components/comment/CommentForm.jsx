"use client";

import Loading from "@/components/ui/Loading";
import SubmitButton from "@/components/ui/SubmissionButton";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState); //useFormState ==> react V18 but useActionState ==> React V19
  // const createCommentWithData = createComment.bind(null, postId, parentId);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  const { pending } = useActionState();

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />

            <div className="mt-8">
              {pending ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
