import { useState } from "react";

export function useRecordForm() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(0);

  const [hasTitleError, setTitleError] = useState(false);
  const [hasTimeError, setTimeError] = useState(false);

  const hasInputError = (title: string, time: number): boolean => {
    if (title === "" && time <= 0) {
      setTitleError(true);
      setTimeError(true);
      return true;

    } else if (title === "") {
      setTitleError(true);
      setTimeError(false);
      return true;

    } else if (time <= 0) {
      setTitleError(false);
      setTimeError(true);
      return true;

    } else {
      setTitleError(false);
      setTimeError(false);
      return false;
    }
  };

  const initializeForm = () => {
    setTitle("");
    setTime(0);
  };

  return {
    title,
    setTitle,
    hasTitleError,
    time,
    setTime,
    hasTimeError,
    hasInputError,
    initializeForm,
  };
}