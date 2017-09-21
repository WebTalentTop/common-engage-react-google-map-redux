/**
 * Created by haunguyen on 5/22/17.
 */
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 300;
  flex: 1;
  letter-spacing: .04em;
`;

export const Span = styled.span`
  color: #a4a4a4;
  font-size: 13px;
`;

export const ListThumb = styled.ul`
  list-style: none;
  border: 1px solid #dedede;
  border-top: none;
  padding: 10px 10px 0px;
  background-color: #fffefa;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 80px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: ${props => props.border ? '2px solid #125589' : 'none'};
  &:last-child {
    margin-right: 0px;
  }
`;

export const PhotoThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AddPhoto = styled.div`
  border: 1px solid #F6F4E7;
  padding: 10px;
  color: #ECE8CD;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
`;

export const AddPhotoIcon = styled(FontAwesome)`
  display: block;
`;

export const AddPhotoText = styled.div`
  font-size: 11px;
  display: block;
`;

export const InputHidden = styled.input`
  display: none !important;
`;

export const PhotoButton = styled.button`
  position: relative;
  padding: 9px 10px 9px 30px;
  background-color: #FFFEFA;
  color: #125589;
  cursor: pointer;
  border: 1px solid #dedede;
  border-radius: 3px;
  width: 150px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const ButtonIcon = styled(FontAwesome)`
  position: absolute;
  top: calc(50% - 6px);
  left: 10px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #dedede;
  padding: 20px;
  background-color: #fffefa;
`;

export const GroupButton = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const NavArrow = styled(FontAwesome)`
  position: absolute;
  top: calc(50% - 15px);
  border: 1px solid #dedede;
  border-radius: 50%;
  background-color: #fff;
  color: #a4a4a4;
  font-size: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PrevArrow = styled(NavArrow)`
  padding: 9px 10px;
  left: 10px;
`;

export const NextArrow = styled(NavArrow)`
  padding: 9px 12px;
  right: 10px;
`;
