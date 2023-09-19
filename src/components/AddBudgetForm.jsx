// react imports
import { useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  return <div></div>;
};

export default AddBudgetForm;
