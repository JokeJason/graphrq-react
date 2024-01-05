import * as utils from '@/utils/utils.ts';
import * as fs from 'fs';

describe('graphrq-react test', () => {
  test('createReactFlowNodes should convert json to NodeType', () => {
    const rawContent = fs.readFileSync('src/__tests__/requirements.json', {
      encoding: 'utf8',
    });

    const jsonData = JSON.parse(rawContent);
    const nodeType = utils.createReactFlowNodes(jsonData.requirements);

    const matchedData0 = {
      id: '93fed700-ea33-43c5-8946-a88572850a5e',
      data: {
        title: 'Req1',
        description: 'Description of Req1',
      },
      position: { x: 0, y: 0 },
      type: 'requirement',
    };
    const matchedData1 = {
      id: 'ce11a71d-f075-4752-a3cd-d7353bd60b95',
      data: {
        title: 'Req1.1-Updated',
        description: 'Description of Req1.1-Updated',
      },
      position: { x: 0, y: 0 },
      type: 'requirement',
    };
    expect(nodeType[0]).toEqual(matchedData0);
    expect(nodeType[1]).toEqual(matchedData1);
  });
});
