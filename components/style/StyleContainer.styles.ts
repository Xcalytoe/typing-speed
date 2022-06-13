import styled from 'styled-components';
import variables from './Variables.styles';

export const StyledContainerFlex = styled.div`
  ${variables}
  display: -webkit-flex;
  display: flex;
  &.nav-container {
    padding: 23px 50px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray);
    /* top: 0; 
    position: sticky; */
    button {
      &:last-of-type {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    &.nav-container {
      padding: 23px;
      .btn-flex {
        justify-content: flex-end !important;
        column-gap: 20px;
        button {
          &:last-of-type {
            display: block;
          }
        }
      }
    }
  }
`;
export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 991px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1065px;
  }
  @media (min-width: 1600px) {
    max-width: 1250px;
  }
`;

export const StyledContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 740px;
  }
  @media (min-width: 868px) {
    max-width: 840px;
  }
  @media (min-width: 991px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1360px) {
    max-width: 1290px;
  }
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;
export const StyledFooter = styled.footer`
  ${variables}
  background: var(--white);
  padding-top: 90px;
  padding-bottom: 40px;
  @media only screen and (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 20px;
  }
  p {
    color: var(--primary-text2);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    padding: 20px 0;
    max-width: 375px;
  }
  h4 {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary-text);
    margin-bottom: 22px;
  }
  a {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    color: var(--primary-text2);
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      transition: all 0.3s;
      text-decoration: underline;
    }
  }
  .links {
    justify-content: flex-end;
    display: grid;
    a {
      margin-bottom: 8px;
    }
  }
  span {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    color: var(--primary-black);
  }
`;

export const StyledItemFlex = styled.div<{ rowGap: string; columnGap: string }>`
  display: -webkit-flex;
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  .product-category {
    span {
      width: 100% !important;
      width: max-content;
    }
  }
  @media only screen and (max-width: 991px) {
    &.nav-link {
      column-gap: 6px;
      max-width: 360px !important;
    }
  }
  @media only screen and (max-width: 800px) {
    &.nav-link {
      max-width: 320px !important;
    }
  }
  @media only screen and (max-width: 767px) {
    &.nav-link,
    .nav-btn {
      display: none;
    }
  }
`;

export const StyledHero = styled.section`
  ${variables}
  position: relative;
  /* max-height: 588px;
  max-width: 1440px; */
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.025em;
    color: var(--secondary-text);
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 767px) {
    .hero-img {
      min-height: 400px;
      span {
        min-height: 400px !important;
      }
      img {
        object-fit: cover;
      }
    }
    h1 {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 767px) {
    .hero-img {
      min-height: 400px;
      span {
        min-height: 400px !important;
      }
      img {
        object-fit: cover;
      }
    }
  }
`;

export const StyledTitleH3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  color: var(--primary-text);
  @media only screen and (max-width: 991px) {
    font-size: 26px;
  }
`;
export const StyledTag = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 160%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-text);
  padding: 3px 10px;
  background: var(--badge);
  flex-shrink: 0;
  border: 0.972789px solid var(--primary-text);
`;

export const StyledHeroH1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 130%;
  color: var(--primary-text);
  margin: 10px 0px;
  @media only screen and (max-width: 576px) {
  }
`;

export const StyledHeroH3 = styled.h3<{
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
}>`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  line-height: ${({ lineHeight }) => lineHeight || '130%'};
  color: var(--primary-text);
`;
export const StyledProfileImg = styled.img<{
  imgWidth: string;
  imgHeight: string;
}>`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledTextSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #606060;
`;

export const StyledTextP = styled.p<{
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
}>`
  ${variables}
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: ${({ lineHeight }) => lineHeight || '130%'};
  color: var(--primary-text);
  a {
    display: inline-block;
    font-weight: 500;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      transition: all 0.3s;
      text-decoration: underline;
    }
  }
`;
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: relative;
`;

export const StyledNavLink = styled.a`
  ${variables}
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  text-align: right;
  letter-spacing: 0.025em;
  color: var(--primary-text);
`;
export const StyledLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  &.insta {
    &-feed {
      span {
        width: 100% !important;
      }
      .insta-overlay {
        opacity: 0;
        transition: all 0.3s;
        background: transparent;
      }
      &:hover {
        transition: all 0.3s;
        .insta-overlay {
          background: linear-gradient(
            0deg,
            rgba(71, 34, 14, 0.6),
            rgba(71, 34, 14, 0.6)
          );
          opacity: 1;
          transition: all 0.3s;
        }
      }
    }
  }
  &.subheader-link {
    svg {
      position: relative;
      transition: all 0.3s;
      left: 0;
    }
    &:hover svg {
      transition: all 0.3s;
      left: 5px;
    }
  }
`;
export const StyledNavBar = styled.nav`
  ${variables}
  top: 0;
  position: sticky;
  z-index: 2000;
  background: var(--white);
`;

export const StyledNavBtn = styled.button`
  background-color: white;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: 1px solid #065fd4;
  color: #065fd4;
  height: 36px;
  padding: 0 6px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const StyledEmptyContainer = styled.div<{
  padding?: string;
  mobilePad?: string;
}>`
  ${variables}
  padding: ${({ padding }) => padding ?? '0'};
  @media only screen and (max-width: 991px) {
    padding: ${({ mobilePad }) => mobilePad ?? '0'};
  }
  input.news-letter {
    width: 100%;
    height: 100%;
    background: var(--white);
    padding: 0 20px;
    border: 1px solid var(--gray);
    transition: all 0.3s;
    height: 50px;
    &::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      color: var(--gray);
    }
    &:focus {
      transition: all 0.3s;
      box-shadow: none;
      outline: none;
      border: 1px solid var(--primary-text);
    }
  }
  .arrow {
    top: 50%;
    color: white;
    position: absolute;
    transform: translate(0, -50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    z-index: 2120;
    background: hsla(21, 67%, 17%, 0.6);
    border: 1px solid var(--border-light);
    transition: all 0.3s;
    &:hover {
      transition: all 0.3s;
      background: hsla(21, 67%, 17%, 1);
    }
    &-left {
      left: -60px;
    }
    &-right {
      right: -60px;
    }
  }
  @media only screen and (max-width: 867px) {
    &.quiz-bg {
      display: none;
    }
    .quiz-content {
      text-align: center;
      margin: auto;
      div,
      p {
        margin: auto;
        justify-content: center;
      }
    }
    &.quiz-img {
      right: auto !important;
    }
  }
`;

// export const SpinnerStyle = styled.div`
//   display: inline-block;
//   width: 25px;
//   height: 25px;
//   border: 3px solid #606060;
//   border-radius: 50%;
//   border-top-color: #f9f9f9;
//   animation: spin 1s ease-in-out infinite;
//   -webkit-animation: spin 1s ease-in-out infinite;

//   @keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @-webkit-keyframes spin {
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
// `;

export const StyledBtn = styled.button`
  border: none;
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  transition: all 0.3s;

  &.collapse-btn {
    border-top: 1px solid #dcc6b5;
    padding: 21px 20px;
    div {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.025em;
      text-transform: uppercase;
      color: var(--primary-text);
    }
  }
`;

export const StyledSubNav = styled.div`
  ${variables};

  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 8px;
  background: var(--background-dark);
  color: var(--white);
`;

export const SkeletonCardStyle = styled.div`
  display: grid;
  row-gap: 16px;
`;

export const SkeletonItemStyle = styled.div<{
  itemWidth: string;
  itemHeight: string;
  itemRadius: string;
}>`
  background-color: #e0e0e0;
  width: ${({ itemWidth }) => itemWidth};
  height: ${({ itemHeight }) => itemHeight};
  border-radius: ${({ itemRadius }) => itemRadius};
`;
export const StyledItemGrid = styled.div<{
  rowGap: string;
  columnGap: string;
  minmax: string;
  mobileCol?: string;
}>`
  display: -ms-grid;
  display: -moz-grid;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minmax }) => minmax}, 1fr)
  );
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  @media only screen and (max-width: 767px) {
    column-gap: ${({ mobileCol }) => mobileCol};
  }
`;
export const StyledBtnText = styled.div<{
  background: string;
  color: string;
  lineHeight: string;
  fontSize: string;
  fontweight: string;
  hoverBg: string;
  hoverColor: string;
}>`
  font-style: normal;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontweight }) => fontweight};
  height: 40px;
  width: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s;
  svg {
    transition: all 0.3s;
    position: relative;
    margin-left: 12px;
    left: 0;
  }
  &:hover {
    transition: all 0.3s;
    background: ${({ hoverBg }) => hoverBg};
    color: ${({ hoverColor }) => hoverColor};
    svg {
      transition: all 0.3s;
      left: 4px;
      path {
        fill: ${({ hoverColor }) => hoverColor};
      }
    }
  }
  @media only screen and (max-width: 375px) {
    &.review-btn {
      font-size: 11px;
      padding: 0 12px;
    }
  }
`;

// 404
export const StyledError404 = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  min-height: 515px;
  max-height: 515px;
  height: 100%;
  max-width: 448px;
  margin: auto;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 130%;
    color: var(--primary-text);
    margin: 16px auto;
  }
  a {
    max-width: 320px;
    margin: 16px auto;
  }
  @media only screen and (max-width: 767px) {
    min-height: auto;
  }
  @media only screen and (max-width: 475px) {
    h2 {
      font-size: 26px;
    }
  }
`;
// cart style
export const StyledCart = styled.div`
  position: fixed;
  top: 105px;
  top: 0;
  right: 0;
  z-index: 1000;
  max-width: 482px;
  width: 100%;
  height: 100%;
  background: var(--white);
  animation: drop_in 0.2s ease-out;
  -webkit-animation: drop_in 0.2s ease-out;
  & > div {
    overflow-y: scroll;
    max-height: 65vh;
    max-height: calc(100vh - 220px);
  }
  &.off {
    animation: drop_out 0.2s ease-in;
    -webkit-animation: drop_out 0.2s ease-in;
  }

  @keyframes drop_in {
    from {
      opacity: 0.6;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes drop_out {
    from {
      opacity: 0.6;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-10px);
    }
  }
`;
// auth
export const StyledForm = styled.form`
  ${variables}
  max-width: 320px;
  margin: auto;
  width: 100%;
  padding-top: 104px;
  padding-bottom: 138px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #3a3a3a;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: var(--primary-text);
    margin: 10px 0;
    margin-bottom: 30px;
  }
`;

export const StyledSelectFilter = styled.select`
  ${variables}
  border:none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1em;
  height: 48px;
  padding-right: 30px;
  background-color: transparent;
  /* flex-basis: 181px; */
  /* width: 100%; */
  flex-grow: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #47220e;
  height: 40px;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export const StyledInput = styled.label<{ border?: string }>`
  ${variables}
  display:block;
  margin: 16px 0px;
  position: relative;
  input {
    background: var(--white);
    /* border: 1px solid var(--gray); */
    border: ${({ border }) => border};
    height: 50px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.3s;
    &:hover {
      transition: all 0.3s;
      border-radius: 0;
    }
    &:focus {
      transition: all 0.3s;
      border-radius: 0;
      border: 1px solid var(--background-dark);
      outline: none;
      box-shadow: none;
    }
  }
`;
export const StyledSearch = styled.form`
  position: fixed;
  top: 100px;
  width: 100%;
  left: 0;
  background-color: var(--white);
  padding-bottom: 20px;
  z-index: 1000;
  label {
    flex-grow: 1;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      box-shadow: none;
      padding-left: 30px;
      padding-right: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: var(--primary-text);
      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    }
  }
  button {
    background: none;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    color: var(--primary-text);
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
  .search {
    &-bar {
      border-bottom: 1px solid var(--primary-black);
      padding: 16px 0;
      margin-top: 100px;
      margin-bottom: 14px;
    }
    &-count {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      padding-left: 48px;
      color: var(--primary-text);
      span {
        color: var(--gray);
      }
    }
    &-items {
      padding-left: 48px;
      padding-top: 20px;
      overflow-y: auto;
      min-height: 200px;
      background: var(--white);
      max-height: calc(75vh - 80px);
    }
  }
  @media only screen and (max-width: 1040px) {
    top: 60px;
  }
`;
export const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: var(--primary-text);
  margin-bottom: 10px;
  display: inline-block;
  @media only screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

export const StyledFormInput = styled.input`
  background: var(--white);
  border: 1px solid var(--gray);
  width: 100%;
  height: 50px;
  transition: all 0.3s;
  color: var(--primary-text2);
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    border: 1px solid var(--primary-text);
    outline: none;
    box-shadow: none;
    transition: all 0.3s;
  }
`;
export const StyledFormTextarea = styled.textarea`
  background: var(--white);
  border: 1px solid var(--gray);
  width: 100%;
  min-height: 150px;
  transition: all 0.3s;
  color: var(--primary-text2);
  padding: 20px;
  max-width: 100%;
  display: block;
  &:focus {
    border: 1px solid var(--primary-text);
    outline: none;
    box-shadow: none;
    transition: all 0.3s;
  }
`;
export const StyledFormSelect = styled.select`
  background: var(--white);
  border: 1px solid var(--gray);
  width: 100%;
  height: 50px;
  transition: all 0.3s;
  color: var(--primary-text2);
  padding-left: 20px;
  padding-right: 20px;
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  cursor: pointer;
  &:focus {
    border: 1px solid var(--primary-text);
    outline: none;
    box-shadow: none;
    transition: all 0.3s;
  }
`;

// products
export const StyledProduct = styled.div`
  ${variables}
  position: relative;
  text-align: center;
  transition: all 0.3s;
  span {
    width: 100% !important;
  }

  .badge {
    position: absolute;
    top: 10px;
    right: 10px;
    width: auto !important;
    padding: 3px 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 160%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary-text);
    background-color: var(--badge);
    border: 1px solid var(--primary-text);
  }
  .img-style {
    width: 100%;
    object-fit: cover;
    transition: all 0.3s;
    transform: scale(1);
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: var(--primary-black);
    margin-top: 16px;
  }
  &:hover {
    transition: all 0.3s;
    img {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.025em;
    color: var(--primary-black);
  }
`;

export const StyledStarRating = styled.div`
  ${variables}
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.025em;
    color: var(--primary-black);
    margin-bottom: 10px;
  }
  span.review {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    width: auto !important;
    color: var(--secondary-text);
  }
  .on svg path:first-of-type {
    fill: var(--rating);
    transition: all 0.3s;
  }
  .onn svg path:first-of-type {
    fill: var(--rating2);
    transition: all 0.3s;
  }
  .off svg path:first-of-type {
    fill: var(--white);
    transition: all 0.3s;
  }
`;

// product images
export const StyledProductImages = styled.div`
  button.image-display span {
    width: 100% !important;
  }
  .mobile-view {
    display: none;
  }
  @media only screen and (max-width: 576px) {
    .mobile-view {
      display: flex;
      overflow-x: scroll;

      div {
        flex: 1 0 250px;
        position: relative;
      }
    }
    .web-view {
      display: none;
    }
  }
`;

// increment
export const StyledIncrement = styled.div<{
  lineHeight: string;
  fontSize: string;
  border: string;
  padding: string;
}>`
  flex-grow: 1;
  display: flex;
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }
  button {
    cursor: pointer;
  }
  button,
  input {
    background: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ fontSize }) => fontSize || '16px'};
    line-height: ${({ lineHeight }) => lineHeight || '140%'};
    text-align: center;
    text-transform: uppercase;
    color: #47220e;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
  input {
    color: #3a3a3a;
    width: 100%;
  }
`;

// review form
export const StyledFixedOverlay = styled.div`
  position: fixed;
  background: hsl(21, 67%, 17%);
  background: hsla(21, 67%, 17%, 0.6);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2100;
  .review-modal {
    max-width: 880px;
    width: 100%;
    background: var(--background-light2);
    backdrop-filter: blur(35px);
    margin: 40px auto;
    padding: 50px;
    max-height: calc(100% - 80px);
    overflow-y: auto;
  }
  @media only screen and (max-width: 500px) {
    .review-modal {
      padding: 40px 30px;
    }
  }
  @media only screen and (max-width: 375px) {
    .review-modal {
      padding: 30px 20px;
    }
  }
`;

export const StyledUnderline = styled.div`
  border: 1px solid var(--gray);
`;
export const StyledMenuDropdown = styled.div`
  display: block;
  position: absolute;
  background: var(--white);

  @keyframes enter {
    from {
      opacity: 0;
      transform: scale(0.95), translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1), translateY(0);
    }
  }
  div {
    padding-bottom: 10px;
    padding-left: 20px;
    &:last-of-type {
      padding-bottom: 20px;
    }
    &:first-of-type {
      margin-top: -4px;
    }
  }
  @media only screen and (min-width: 768px) {
    animation: enter 0.2s ease-out;
    border: 1px solid var(--gray);
    top: 47px;
    width: 200px;
    padding: 20px;
  }
  @media only screen and (min-width: 991px) {
    width: 277px;
    padding: 30px;
  }
  @media only screen and (max-width: 767px) {
    position: relative;
  }
`;
export const StyledMenuDropdownContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  button {
    display: block !important;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 140%;
    text-align: left;
    letter-spacing: 0.025em;
    color: var(--primary-text);
  }
  @media only screen and (max-width: 767px) {
    border-bottom: 1px solid var(--gray);
    button {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.025em;
      color: var(--primary-black);
      padding: 20px 0;
    }
  }
`;
// review form
export const StyledMobileMenu = styled.div`
  display: none;
  animation: exit 0.1s ease-in;
  .nav {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.025em;
    color: var(--primary-black) !important;
    padding: 20px 0;
    display: block;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid var(--gray);
  }
  @media only screen and (max-width: 767px) {
    display: block;
    position: absolute;
    height: 100vh;
    width: 100vw;
    padding: 24px 32px;
    background: var(--white);
    animation: enter 0.2s ease-out;
  }
  @media only screen and (max-width: 500px) {
    padding: 20px 15px;
  }
  @keyframes enter {
    from {
      opacity: 0;
      transform: scale(0.95), translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1), translateY(0);
    }
  }
  @keyframes exit {
    from {
      opacity: 1%;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;
