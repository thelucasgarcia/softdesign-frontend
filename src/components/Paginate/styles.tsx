import Pagination from 'rc-pagination';
import styled from 'styled-components';

export const RcPagination = styled(Pagination)`

  margin: 0;
  padding: 0;
  font-size: 14px;

  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  list-style: none;
 
  .rc-pagination-total-text {
    display: inline-block;
    height: 28px;
    margin-right: 8px;
    line-height: 26px;
    vertical-align: middle;
  }
  .rc-pagination-item {
    display: inline-flex;
    place-items: center;
    place-content: center;
    min-width: 28px;
    height: 28px;
    margin-right: 8px;
    list-style: none;
    background-color: ${props => props.theme.colors.light};
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
  }
  .rc-pagination-item a {
    padding: 0 6px;
    color: rgba(0,0,0,0.85);
    text-decoration: none;
    font-weight: bold;
  }
  .rc-pagination-item a:hover {
    text-decoration: none;
    color: inherit;
  }
  .rc-pagination-item:focus, .rc-pagination-item:hover {
    border-color: ${props => props.theme.colors.primary};
    transition: all 0.3s;
  }
  .rc-pagination-item:focus a, .rc-pagination-item:hover a {
    color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-item-active a {
    color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-item-active:focus, .rc-pagination-item-active:hover {
    border-color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-item-active:focus a, .rc-pagination-item-active:hover a {
    color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-jump-prev, .rc-pagination-jump-next {
    outline: 0;
  }
  .rc-pagination-jump-prev button, .rc-pagination-jump-next button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #666;
  }
  .rc-pagination-jump-prev button:after, .rc-pagination-jump-next button:after {
    display: block;
    content: '•••';
  }
  .rc-pagination-prev, .rc-pagination-jump-prev, .rc-pagination-jump-next {
    margin-right: 8px;
  }
  .rc-pagination-prev, .rc-pagination-next, .rc-pagination-jump-prev, .rc-pagination-jump-next {
    display: inline-flex;
    min-width: 28px;
    height: 28px;
    color: rgba(0,0,0,0.85);
    list-style: none;
    border-radius: 2px;
    cursor: pointer;
    display: inline-grid;
    place-content: center;
  }
  .rc-pagination-prev, .rc-pagination-next {
    outline: 0;
    background: ${props => props.theme.colors.primary}
  }
  .rc-pagination-prev svg, .rc-pagination-next svg {
    color: rgba(0,0,0,0.85);
    cursor: pointer;
    user-select: none;
  }
  .rc-pagination-prev:hover svg, .rc-pagination-next:hover svg {
    border-color: #40a9ff;
  }
  .rc-pagination-prev .rc-pagination-item-link, .rc-pagination-next .rc-pagination-item-link {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border-radius: 2px;
    outline: none;
    transition: all 0.3s;
  }
  .rc-pagination-prev:focus .rc-pagination-item-link, .rc-pagination-prev:hover .rc-pagination-item-link, .rc-pagination-next:focus .rc-pagination-item-link, .rc-pagination-next:hover .rc-pagination-item-link {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
  .rc-pagination-prev button:after {
    content: '‹';
    display: block;
  }
  .rc-pagination-next button:after {
    content: '›';
    display: block;
  }
  .rc-pagination-disabled, .rc-pagination-disabled:hover, .rc-pagination-disabled:focus {
    cursor: not-allowed;
  }
  .rc-pagination-disabled .rc-pagination-item-link, .rc-pagination-disabled:hover .rc-pagination-item-link, .rc-pagination-disabled:focus .rc-pagination-item-link {
    color: rgba(0,0,0,0.25);
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  .rc-pagination-slash {
    margin: 0 10px 0 5px;
  }
  .rc-pagination-options {
    display: inline-block;
    margin-left: 16px;
    vertical-align: middle;
  }
  @media all and (-ms-high-contrast: none) {
    .rc-pagination-options *::-ms-backdrop, .rc-pagination-options {
      vertical-align: top;
  }
  }
  .rc-pagination-options-size-changer.rc-select {
    display: inline-block;
    width: auto;
    margin-right: 8px;
  }
  .rc-pagination-options-quick-jumper {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
  }
  .rc-pagination-options-quick-jumper input {
    width: 50px;
    margin: 0 8px;
  }
 
  .rc-pagination.rc-pagination-disabled {
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item {
    background: hsv(0,0,96%);
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item a {
    color: rgba(0,0,0,0.25);
    background: transparent;
    border: none;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-active {
    background: #000 0;
    border-color: transparent;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-active a {
    color: #fff;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-link {
    color: rgba(0,0,0,0.25);
    background: hsv(0,0,96%);
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-link-icon {
    opacity: 0;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-ellipsis {
    opacity: 1;
  }
  @media only screen and (max-width: 992px) {
    .rc-pagination-item-after-jump-prev, .rc-pagination-item-before-jump-next {
      display: none;
  }
  }
  @media only screen and (max-width: 576px) {
    .rc-pagination-options {
      display: none;
  }
  }

`