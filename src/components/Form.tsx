import React, { useState } from "react";
import { Subs } from "../types";

interface FormState {
  inputValues: Subs;
}

interface FormProps {
  onNewSub: React.Dispatch<React.SetStateAction<Subs[]>>;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub((subs) => [...subs, inputValue]);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValue.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValue.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValue.description}
          name="description"
          placeholder="description"
        />
        <button>Save new Sub</button>
      </form>
    </div>
  );
};

export default Form;
