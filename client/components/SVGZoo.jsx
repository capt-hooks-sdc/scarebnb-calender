import React from 'react';


const SVGZoo = (props) => {

  /// Some defaults
  let viewBox="0 0 32 32";
  let xmlns="http://www.w3.org/2000/svg";
  let role="presentation";
  let focusable="false";
  let style = {'display': 'block', 'height': '24px', 'width': '24px', 'fill': 'currentcolor'};
  let path = '';



  if (props.name === 'house') {

    // viewBox="0 0 32 32";
    // xmlns="http://www.w3.org/2000/svg";
    // role="presentation";
    // focusable="false";
    // style = {'display': 'block', 'height': '24px', 'width': '24px', 'fill': 'currentcolor'};
    path = 'M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z'

  } else if (props.name === 'sparkle') {

    path = 'M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z'

  }

  else if (props.name === 'door') {

    path = 'M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm-4 2H7l-.001 26H21zm4 0h-2v26h1.999zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'

  }


  else if (props.name === 'rules') {

    path = 'M28.477 1.07a2 2 0 0 1 2.515 1.754L31 3v23.04a2 2 0 0 1-1.34 1.888l-.153.047-13 3.41a2 2 0 0 1-.813.041l-.201-.041-13-3.41a2 2 0 0 1-1.487-1.776L1 26.04V3a2 2 0 0 1 2.35-1.969l.173.039L16 4.448zM29 3L16.523 6.378a2 2 0 0 1-.873.039l-.173-.039L3 3v23.04l13 3.41 13-3.41zm-2 17.984v2l-9 2.5v-2zm0-7v2l-9 2.5v-2zm0-7v2l-9 2.5v-2z'

  }

  else if (props.name === 'arrowdown') {
    path = 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z'
  }

  else if (props.name === 'minus') {

    style = {'display': 'block', 'height': '12px', 'width': '12px', 'fill': 'none', 'stroke': 'currentcolor', 'strokeWidth': '5.33333', 'overflow': 'visible'};

    path = 'm2 16h28'
  }

  else if (props.name === 'plus') {
    style = {'display': 'block', 'height': '12px', 'width': '12px', 'fill': 'none', 'stroke': 'currentcolor', 'strokeWidth': '5.33333', 'overflow': 'visible'};

    path = 'm2 16h28'
  }


  else if (props.name === 'prev-month') {
    let viewBox="0 0 18 18";
    style = {'display': 'block', 'height': '18px', 'width': '18px', 'fill': 'none', 'stroke': 'currentcolor'};

    path = 'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z'
  }


  else if (props.name === 'post-month') {
    let viewBox="0 0 18 18";
    style = {'display': 'block', 'height': '18px', 'width': '18px', 'fill': 'none', 'stroke': 'currentcolor'};

    path = 'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z'
  }




  return (
  <svg
    style={style}
    viewBox={viewBox}
    xmlns={xmlns}
    role="presentation"
    xmlns="http://www.w3.org/2000/svg">

    <path d= {path}></path>
  </svg>

)
}

export default SVGZoo;


