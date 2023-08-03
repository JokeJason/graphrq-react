import React, { useCallback } from 'react';

const RequirementNode = () => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);
  return (
    <div>
      <label htmlFor={'text'}>ID:</label>
      {/* ID from backend */}
      <br />
      <label htmlFor={'text'}>Title:</label>
      <input id={'text'} type={'text'} onChange={onChange} />
      <br />
      <label htmlFor={'text'}>Description:</label>
      <input id={'text'} type={'text'} onChange={onChange} />
      <br />
    </div>
  );
};

export default RequirementNode;
