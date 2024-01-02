import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeDataType } from '../requirementSlice.ts';

export type RequirementNodeComponentProps = {
  id: string;
  data: NodeDataType;
  isConnectable: boolean;
};

const RequirementNode = ({
  id,
  data,
  isConnectable,
}: RequirementNodeComponentProps) => {
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
      <label htmlFor={'text'}>ID: {id}</label>
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
