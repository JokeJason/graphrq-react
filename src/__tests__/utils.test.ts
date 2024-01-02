import fs from 'fs';
import * as utils from '../utils';
import { EdgeType, NodeType } from '../types.ts';

describe('graphrq-react test', () => {
  test('createReactFlowNodes should convert json to NodeType', () => {
    const rawContent = fs.readFileSync('src/__tests__/requirements.json', {
      encoding: 'utf8',
    });

    const jsonData = JSON.parse(rawContent);
    const nodes = utils.createReactFlowNodes(jsonData.requirements);

    const expectedNode0: NodeType = {
      id: '93fed700-ea33-43c5-8946-a88572850a5e',
      data: {
        title: 'Req1',
        description: 'Description of Req1',
      },
      position: { x: 0, y: 0 },
      type: 'requirement',
    };
    const expectedNode1: NodeType = {
      id: 'ce11a71d-f075-4752-a3cd-d7353bd60b95',
      data: {
        title: 'Req1.1-Updated',
        description: 'Description of Req1.1-Updated',
      },
      position: { x: 0, y: 0 },
      type: 'requirement',
    };
    expect(nodes[0]).toEqual(expectedNode0);
    expect(nodes[1]).toEqual(expectedNode1);
  });

  test('createReactFlowEdges should convert json to EdgeType', () => {
    const rawContent = fs.readFileSync('src/__tests__/requirements.json', {
      encoding: 'utf8',
    });

    const jsonData = JSON.parse(rawContent);
    const edges = utils.createReactFlowEdges(jsonData.requirements);

    const expectedEdge0: EdgeType = {
      id: 'edge-93fed700-ea33-43c5-8946-a88572850a5e<->ce11a71d-f075-4752-a3cd-d7353bd60b95',
      source: '93fed700-ea33-43c5-8946-a88572850a5e',
      target: 'ce11a71d-f075-4752-a3cd-d7353bd60b95',
    };
    const expectedEdge1: EdgeType = {
      id: 'edge-93fed700-ea33-43c5-8946-a88572850a5e<->12128aa8-293f-4e9d-b46b-477b2e4c46be',
      source: '93fed700-ea33-43c5-8946-a88572850a5e',
      target: '12128aa8-293f-4e9d-b46b-477b2e4c46be',
    };

    expect(edges[0]).toEqual(expectedEdge0);
    expect(edges[1]).toEqual(expectedEdge1);
  });
});
