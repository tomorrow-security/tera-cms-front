import { useEffect } from "react"

export default function InputButton({
  mutation,
  defaultValue,
  loadingValue,
  successValue,
  onClick,
}) {
  const submitButtonParams = {
    loading: {
      value: loadingValue,
      color: "bg-stormy cursor-wait",
      position: "absolute left-0 top-0 z-20",
      disabled: true,
    },
    success: {
      value: successValue,
      color: "bg-green-500 cursor-not-allowed",
      position: "absolute left-0 -top-10/100 z-20",
      disabled: true,
    },
    default: {
      value: defaultValue,
      color: "bg-tangerine group-hover:shadow-xl shadow-inherit cursor-pointer",
      position: "absolute left-0 -top-15/100 z-20",
      disabled: false,
    },
  }

  // Reset button status on successful submission
  useEffect(() => {
    if (mutation.status === "success") {
      mutation.reset()
    }
  })

  return (
    <div className="pt-2 mx-auto w-max group">
      <div
        className="relative z-0 h-10 px-4 outline-none w-max"
      >
        {["loading", "success"].includes(mutation.status)
          ? submitButtonParams[mutation.status].value
          : submitButtonParams["default"].value}
        <input
          onClick={onClick}
          // onSubmit={() => reset({ keepIsSubmitted:false })}  //!
          type="submit"
          value={
            ["loading", "success"].includes(mutation.status)
              ? submitButtonParams[mutation.status].value
              : submitButtonParams["default"].value
          }
          className={`${
            ["loading", "success"].includes(mutation.status)
              ? submitButtonParams[mutation.status].position
              : submitButtonParams["default"].position
          } 
          w-max px-4 h-10 mx-auto outline-none
          ${
            ["loading", "success"].includes(mutation.status)
              ? submitButtonParams[mutation.status].color
              : submitButtonParams["default"].color
          }`}
          disabled={
            ["loading", "success"].includes(mutation.status)
              ? submitButtonParams[mutation.status].disabled
              : submitButtonParams["default"].disabled
          }
        />
      </div>
    </div>
  )
}
