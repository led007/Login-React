import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

    

import StarRating from 'react-native-star-rating';

const onStarRatingPress = (rating) => {
    setStarCount(rating)
  }


 const GeneralStarExample = () => {
    const [starCount, setStarCount] = useState(1)
    return (
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => onStarRatingPress(rating)}
        />
      )
 }


export default GeneralStarExample