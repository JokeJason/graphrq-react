import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeDataType } from '../requirementSlice.ts';

export type RequirementNodeComponentProps = {
  data: NodeDataType;
  isConnectable: boolean;
};

const RequirementNode = ({
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
        position={Position.Left}
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
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default RequirementNode;
