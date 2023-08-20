import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

interface RequirementNodeDataProps {
  data: {
    id: string;
    title: string;
    description: string;
  };
  isConnectable: boolean;
}

const RequirementNode = ({ data, isConnectable }: RequirementNodeDataProps) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);
  return (
    <div>
      <Handle
        type={'target'}
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <label htmlFor={'text'}>ID:</label>
      {/* ID from backend */}
      <br />
      <label htmlFor={'text'}>Title:</label>
      <input id={'text'} type={'text'} onChange={onChange} value={data.title} />
      <br />
      <label htmlFor={'text'}>Description:</label>
      <input
        id={'text'}
        type={'text'}
        onChange={onChange}
        value={data.description}
      />
      <br />
      <Handle
        type={'source'}
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default RequirementNode;
