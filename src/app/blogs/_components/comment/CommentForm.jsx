"use client";

import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form action={createComment} className="space-y-7">
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />

            <Button>تایید</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
