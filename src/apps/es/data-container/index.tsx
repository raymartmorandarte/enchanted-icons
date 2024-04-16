/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M21 3C21 2.17157 20.3284 1.5 19.5 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V19.5C1.5 20.3284 2.17157 21 3 21H10.5V19.5H3V3H19.5V10.5H21V3ZM9.75 
        13.5C9.75 12.6716 9.07843 12 8.25 12H6C5.17157 12 4.5 12.6716 4.5 13.5V15.75C4.5 16.5784 5.17157 17.25 6 17.25H8.25C9.07843 17.25 
        9.75 16.5784 9.75 15.75V13.5ZM6 13.5H8.25V15.75H6V13.5ZM18 6.75C18 5.92157 17.3284 5.25 16.5 5.25H6C5.17157 5.25 4.5 5.92157 4.5 
        6.75V9C4.5 9.82843 5.17157 10.5 6 10.5H16.5C17.3284 10.5 18 9.82843 18 9V6.75ZM6 6.75H16.5V9H6V6.75ZM20.9553 19.5012C20.9702 
        19.5006 20.9851 19.5002 21 19.5H20.895C20.9152 19.5 20.9353 19.5004 20.9553 19.5012ZM20.6175 19.5525C20.728 19.5231 20.8412 19.5059 20.9553 
        19.5012C21.2309 19.5123 21.4984 19.5992 21.7284 19.7528C21.975 19.9176 22.1673 20.1519 22.2808 20.426C22.3943 20.7001 22.4241 21.0017 
        22.3662 21.2926C22.3083 21.5836 22.1654 21.8509 21.9557 22.0607C21.7459 22.2704 21.4786 22.4133 21.1876 22.4712C20.8967 22.5291 20.5951 
        22.4993 20.321 22.3858C20.0469 22.2723 19.8126 22.08 19.6478 21.8334C19.483 21.5867 19.395 21.2967 19.395 21C19.3967 20.8708 19.4143 20.7423 
        19.4475 20.6175L18.6975 19.8225C18.2452 20.0965 17.7264 20.2414 17.1975 20.2414C16.6686 20.2414 16.1498 20.0965 15.6975 19.8225L14.9475 20.6175C14.9807 
        20.7423 14.9983 20.8708 15 21C15 21.2967 14.912 21.5867 14.7472 21.8334C14.5824 22.08 14.3481 22.2723 14.074 22.3858C13.7999 22.4993 13.4983 22.5291 
        13.2074 22.4712C12.9164 22.4133 12.6491 22.2704 12.4393 22.0607C12.2296 21.8509 12.0867 21.5836 12.0288 21.2926C11.9709 21.0017 12.0007 20.7001 
        12.1142 20.426C12.2277 20.1519 12.42 19.9176 12.6666 19.7528C12.9133 19.588 13.2033 19.5 13.5 19.5C13.6286 19.4968 13.757 19.5094 13.8825 
        19.5375L14.6775 18.75C14.4035 18.2977 14.2586 17.7789 14.2586 17.25C14.2586 16.7211 14.4035 16.2024 14.6775 15.75L13.8825 14.9475C13.7577 
        14.9807 13.6292 14.9983 13.5 15C13.2033 15 12.9133 14.912 12.6666 14.7472C12.42 14.5824 12.2277 14.3481 12.1142 14.074C12.0007 13.7999 11.9709 
        13.4983 12.0288 13.2074C12.0867 12.9164 12.2296 12.6491 12.4393 12.4393C12.6491 12.2296 12.9164 12.0867 13.2074 12.0288C13.4983 11.9709 13.7999 
        12.0007 14.074 12.1142C14.3481 12.2277 14.5824 12.42 14.7472 12.6666C14.912 12.9133 15 13.2033 15 13.5C15.0344 13.6297 15.0521 13.7633 15.0525 
        13.8975L15.8025 14.6925C16.2548 14.4185 16.7736 14.2736 17.3025 14.2736C17.8314 14.2736 18.3502 14.4185 18.8025 14.6925L19.5525 13.8975C19.5193 
        13.7727 19.5017 13.6442 19.5 13.515C19.5 13.2183 19.588 12.9283 19.7528 12.6817C19.9176 12.435 20.1519 12.2427 20.426 12.1292C20.7001 12.0157 
        21.0017 11.986 21.2926 12.0438C21.5836 12.1017 21.8509 12.2446 22.0607 12.4543C22.2704 12.6641 22.4133 12.9314 22.4712 13.2224C22.5291 13.5133 
        22.4993 13.8149 22.3858 14.089C22.2723 14.3631 22.08 14.5974 21.8334 14.7622C21.5867 14.927 21.2967 15.015 21 15.015C20.8708 15.0133 20.7423 
        14.9957 20.6175 14.9625L19.8225 15.75C20.0965 16.2024 20.2414 16.7211 20.2414 17.25C20.2414 17.7789 20.0965 18.2977 19.8225 18.75L20.6175 
        19.5525ZM16.0028 16.4166C15.838 16.6633 15.75 16.9533 15.75 17.25C15.75 17.6478 15.908 18.0294 16.1893 18.3107C16.4706 18.592 16.8522 18.75 
        17.25 18.75C17.5467 18.75 17.8367 18.662 18.0834 18.4972C18.33 18.3324 18.5223 18.0981 18.6358 17.824C18.7493 17.5499 18.7791 17.2483 18.7212 
        16.9574C18.6633 16.6664 18.5204 16.3991 18.3107 16.1893C18.1009 15.9796 17.8336 15.8367 17.5426 15.7788C17.2517 15.7209 16.9501 15.7507 16.676 
        15.8642C16.4019 15.9777 16.1676 16.17 16.0028 16.4166Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('data-container', 24, content, attrs);