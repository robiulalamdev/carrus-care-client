const useInputPattern = () => {
  const handleNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const handleNumberAndComma = (e) => {
    e.target.value = e.target.value.replace(/[^0-9,]/g, "");
  };

  const handleAlphabeticInput = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
  };

  const handlePhoneNumberInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+\-]/g, "");
  };

  const getValueDate = (value) => {
    if (value == null || !(value instanceof Date)) {
      return "";
    }
    const offset = value.getTimezoneOffset();
    return new Date(value.getTime() - offset * 60 * 1000)
      .toISOString()
      .split("T")[0];
  };

  return {
    handleNumber,
    handleNumberAndComma,
    handleAlphabeticInput,
    handlePhoneNumberInput,
    getValueDate,
  };
};

export default useInputPattern;
