import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../../context/hotel-context';

const RoomtipsState = ({ children }) => {
  const { hotelId, setRoomtips, setLoading } = useContext(HotelContext);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/hotels/${hotelId}/reviews/roomtips`)
      .then(res => res.json())
      .then(data => {
        setRoomtips(data);
        setLoading(false);
      });
  }, [hotelId]);

  return <div>{children}</div>;
};

RoomtipsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoomtipsState;
