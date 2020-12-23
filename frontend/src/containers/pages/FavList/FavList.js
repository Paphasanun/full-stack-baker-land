import { Col, Row } from 'antd';
import React from 'react';
import Fav from '../../../components/Fav/Fav';

function FavList({ favList }) {
  return (
    <Row justify="center">
      {favList.map(Fav => <Col span={24}><Fav Fav={Fav} /></Col>)}
    </Row>
  );
}

export default FavList;
