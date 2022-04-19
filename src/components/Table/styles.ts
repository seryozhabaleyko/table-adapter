import styled from 'styled-components';

export const TableSC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  border-spacing: 0;
  flex-direction: column;
  border-collapse: collapse;
`;

export const TableHeadSC = styled.div`
  display: block;
  z-index: 1;
  position: relative;
  min-width: 100%;
`;

export const TableBodySC = styled.div`
  flex: 1 1 100%;
  display: block;
`;

export const TableRowSC = styled.div`
`;

export const TableCellSC = styled.div`
  padding: 12px 32px 12px 0;
`;
