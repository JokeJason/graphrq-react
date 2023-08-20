import { Node } from 'reactflow';

export default [
  {
    id: '1',
    data: { title: 'Req1', description: 'Description of Req1' },
    position: { x: 0, y: 0 },
    type: 'requirement',
  },
  {
    id: '2',
    data: { title: 'Req2', description: 'Description of Req2' },
    position: { x: 100, y: 100 },
    type: 'requirement',
  },
] as Node[];
