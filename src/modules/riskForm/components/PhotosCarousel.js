/**
 * This component has been created just for display on Risk Form for testing
 * Waiting for Gilles to have more specific requirements
 * **/

import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import {
  Heading, Label, Span,
  ListThumb, Item, PhotoThumb,
  AddPhoto, AddPhotoIcon, AddPhotoText,
  InputHidden, PhotoButton, ButtonIcon,
  SliderWrapper, GroupButton,
  PrevArrow, NextArrow,
} from '../stylesheet/photosCarousel';

const StyledSlider = styled(Slider)`
  width: 60%;
  overflow: hidden;

  .slick-disabled{
    display: none !important;
  }
`;

class PhotosCarousel extends Component {
  constructor(props) {
    super(props);

    // For testing slider
    // TODO
    this.state = {
      arrayPhotos: [
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Pumpkins.jpg',
          name: 'Pumpkin',
        },
        {
          src: 'https://wiki.nurserylive.com/uploads/default/original/2X/e/e0c6073d833fa4465833d033a79b57c5e8dff084.png',
          name: 'a small pumpkin',
        },
        {
          src: 'http://pad3.whstatic.com/images/thumb/1/12/Grow-a-Pumpkin-Step-9.jpg/v4-550px-Grow-a-Pumpkin-Step-9.jpg',
          name: 'pumpkin with leaf',
        },
      ],
      currentSlide: 1,
    };
    this.slickGoTo = this.slickGoTo.bind(this);
  }

  takePhoto = (e) => {
    if (e && e.preventDefault) e.preventDefault();
  }

  uploadPhoto = (e) => {
    if (e && e.preventDefault) e.preventDefault();
  }

  openBrowserDialog = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    this.inputFile.click();
  }

  addPhoto = (e) => {
    if (e && e.preventDefault) e.preventDefault();
  }

  slickGoTo = (index) => {
    this.slider.slickGoTo(index);
  }

  render() {
    const settings = {
      infinite: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow name="chevron-left" />,
      nextArrow: <NextArrow name="chevron-right" />,
      afterChange: (slick) => {
        this.setState({
          currentSlide: slick + 1,
        });
      },
    };

    return (
      <div>
        <Heading>
          <Label htmlFor="setionTitle">Photos</Label>
          <Span>{this.state.currentSlide}/{this.state.arrayPhotos.length}</Span>
        </Heading>

        <SliderWrapper>
          <StyledSlider {...settings} innerRef={(element) => { this.slider = element; }}>
            {this.state.arrayPhotos.map(photo =>
              <img
                src={photo.src} alt={photo.name}
                key={photo.name}
              />
            )}
          </StyledSlider>
        </SliderWrapper>

        <ListThumb>
          {this.state.arrayPhotos.map((photo, index) =>
            <Item
              key={photo.name}
              border={Boolean(this.state.currentSlide === index + 1)}
            >
              <PhotoThumb
                src={photo.src} alt={photo.name}
                onClick={() => (this.slickGoTo(index))}
              />
            </Item>
          )}
          <Item>
            <AddPhoto onClick={this.openBrowserDialog}>
              <AddPhotoIcon name="camera" />
              <AddPhotoText>Add Photo</AddPhotoText>
            </AddPhoto>
          </Item>
        </ListThumb>

        <GroupButton>
          <InputHidden type="file" innerRef={(element) => { this.inputFile = element; }} onChange={this.addPhoto} />
          <PhotoButton onClick={this.takePhoto}>
            <ButtonIcon name="camera" />
            Take a photo
          </PhotoButton>
          <PhotoButton onClick={this.uploadPhoto}>
            <ButtonIcon name="cloud-upload" />
            Upload
          </PhotoButton>
        </GroupButton>
      </div>
    );
  }
}

export default PhotosCarousel;
