import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const MeteorIcon = (props: SvgProps) => {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
      <G clipPath="url(#clip0_48_129)">
        <Path
          d="M18.55 37.1c10.245 0 18.55-8.305 18.55-18.55C37.1 8.305 28.795 0 18.55 0 8.305 0 0 8.305 0 18.55 0 28.795 8.305 37.1 18.55 37.1z"
          fill="url(#paint0_radial_48_129)"
        />
        <Path
          d="M30.02 18.615c0 1.225-.346 2.26-.663 3.338-.077.261.014.644-.08.896-.26.695-.583 1.35-.965 1.962-.408.655-1.562.405-2.095.952-.552.567-.487 1.929-1.155 2.366-1.849 1.209-4.11 1.891-6.597 1.891-2.174 0-3.387-.562-4.898-1.452-.412-.242-1.404-.322-1.772-.646-.618-.547-1.066-1.542-1.611-2.213-.254-.313-1.246-.364-1.463-.707-1.097-1.73-1.719-3.834-1.719-6.203 0-1.2.572-1.825.851-2.907.085-.327-.246-1.177-.137-1.49a11.02 11.02 0 012.122-3.68c.925-1.052 2.114-.736 3.446-1.368.314-.149.59-1.468.926-1.59C15.57 7.269 17.1 7 18.785 7c1.964 0 4.517.316 6.004 1.158 1.154.653 1.335 1.693 2.21 2.702.417.481 1.019.85 1.35 1.406.335.563.196 1.615.435 2.245.221.583.827.74.96 1.373.181.87.276 1.784.276 2.731z"
          fill="#7738C7"
        />
        <Path
          d="M14.043 7.9c-.27.37-.507 1.333-.773 1.46-.67.318-1.304.396-1.886.53.227-.013.513-.03.66-.037.675-.036 1.812 1.532 2.096 1.71.284.178 1.208.107 1.563-.25.355-.356.284-1.425.142-1.923-.118-.414-1.285-1.195-1.802-1.49zm6.506 1.433c-.144 0-.291.018-.441.057-.64.106-1.812.64-1.421 1.425.39.784 1.101.107 1.527 1.069.427.962.924 1.211 1.492.712.569-.498 1.634-1.069.924-1.96-.6-.751-1.3-1.3-2.08-1.303zm5.551.27c-.555.18-1.22.459-1.374 1.212-.214 1.033-.782 2.138-.32 3.029.462.89 1.137 1.639 1.74 1.674.604.036 1.066-2.352 1.315-2.53.123-.088.508-.395.864-.682l-.017-.032c-.33-.556-.932-.926-1.348-1.408-.368-.426-.613-.857-.86-1.263zM8.113 13.407c-.148.326-.281.661-.4 1.005-.11.314.221 1.165.137 1.492-.28 1.084-.85 1.709-.85 2.912 0 .278.009.553.026.825.33.081.685.168 1.022.26 1.048.285 1.634.178 1.883-.303.248-.48.781-.962 1.03-1.835.248-.873-.71-1.532-1.101-1.942-.391-.41-1.368-1.372-1.404-1.55-.022-.115-.209-.555-.343-.864zm10.396 1.256c-.959.107-2.415.463-2.913.998-.497.534-2.095-.428-2.38.356-.284.784-.106 1.568.143 1.889.248.32 1.918.926 2.877 1.425.959.499 1.882-.642 2.77-1.034.889-.391.818-1.639.711-2.494-.107-.855-1.208-1.14-1.208-1.14zm4.459 2.267c-.51.002-.737.519-.533.97-.879.428-.552 1.108-.1 1.36.452.252.753.327 1.08-.428.326-.756.728-1.487-.05-1.814a1.013 1.013 0 00-.397-.088zm4.714 1.105a.394.394 0 00-.257.12c-.604.57-1.065-.214-1.527.142-.96.535-1.279 1.568-1.03 2.174.248.606.959 1.212 1.598 1.07.64-.143 1.812-1.284 2.025-1.818.183-.46-.29-1.708-.81-1.688zm-13.704 2.209a.663.663 0 00-.196.024c-.603.138-.791.63-.603.945.188.315.528.478.779.529.251.05.816 0 1.055-.567.209-.496-.535-.925-1.035-.931zm9.054 2.356c-.307.005-.535.054-.65.152-.463.392-1.848 1.46-1.884 2.53-.035 1.068.107 2.387.782 2.779.6.348 2.153.472 2.666.72.374-.19.735-.398 1.081-.625.667-.437.602-1.8 1.153-2.368.483-.498 1.476-.337 1.96-.794-.17-.486.185-.665-1.212-1.352-1.359-.668-2.977-1.055-3.896-1.042zm-12.14 1.412a1.702 1.702 0 00-.624.094c-.313.125-.904.666-1.342 1.094.373.2 1.047.283 1.25.533.544.672.991 1.669 1.608 2.215.22.195.664.302 1.074.409.159-.07.202-.206.039-.439-.675-.962.39-1.888.604-2.458.213-.57-.96-.749-1.28-1.07-.219-.22-.808-.373-1.328-.378zm6.85.685c-.44-.005-.925.264-.938.513-.213.535-.699.702-.61 1.092.087.39.213.87.615 1.121.402.252 1.406-.315 1.657-.718.252-.403.24-.932-.088-1.637-.122-.265-.371-.367-.636-.37z"
          fill="#171D8F"
        />
        <Path
          d="M11.985 10.453c-.783.018-.961-.285-1.495.694-.534.978-.445 1.28-.125 1.957.32.676 1.406-2.491 2.171-1.975.765.516.57-.392.196-.623-.374-.231-.747-.053-.747-.053zM16.664 7.783c-.25.178-.125 1.14.57 1.37.693.232 1.583-.587 2.401-.391.819.196 1.46.142 1.281-.32-.178-.463-.444-.783-1.886-.748-1.441.036-1.94-.338-2.366.09zM16.263 14.613c-.353.415-.88 1.057-1.472.919-.592-.139-.415-.554.453-1.032s1.245-.151 1.019.113z"
          fill="#fff"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_48_129"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.591 18.55) scale(17.5152)"
        >
          <Stop stopColor="#7738C7" />
          <Stop offset={1} stopColor="#7738C7" stopOpacity={0.1} />
        </RadialGradient>
        <ClipPath id="clip0_48_129">
          <Path fill="#fff" d="M0 0H37.1V37.1H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ForwardIcon = (props: SvgProps) => {
  return (
    <Svg width={23} height={22} viewBox="0 0 23 22" fill="none" {...props}>
      <Path
        d="M15.166 11a.915.915 0 01-.266.65l-5.5 5.5a.92.92 0 01-1.301-1.3L12.957 11l-4.85-4.85A.917.917 0 019.4 4.859l5.5 5.5c.17.171.265.401.266.642z"
        fill="#FF6B00"
      />
    </Svg>
  );
};

export const HomeCardIcon = (props: SvgProps) => {
  return (
    <Svg width={309} height={10} viewBox="0 0 309 10" fill="none" {...props}>
      <Circle cx={3.5} cy={5} r={3} fill="#FFE000" />
      <Path
        stroke="url(#paint0_linear_1_434)"
        strokeLinecap="round"
        strokeDasharray="4 4"
        d="M7 4.5L298 4.5"
      />
      <G clipPath="url(#clip0_1_434)" fill="#FF6B00">
        <Path d="M303.5.313a4.687 4.687 0 100 9.374 4.687 4.687 0 000-9.374zm-4.212 3.506l.175.256a.059.059 0 01.009.039.058.058 0 01-.02.034l-.179.136a.21.21 0 00-.079.127l-.056.269c.02-.292.07-.58.15-.861zm7.665-.54a.21.21 0 01.189.142l.008.023a.24.24 0 00.227.164h.27c.037.106.069.214.095.323l-.258.258a.05.05 0 01-.015.01.052.052 0 01-.019.004h-.384a.048.048 0 01-.019-.004.049.049 0 01-.025-.026.057.057 0 01-.003-.018.202.202 0 00-.117-.185.202.202 0 00-.218.027l-.715.581a1.067 1.067 0 00-.4.84v.562a.207.207 0 00.059.143l.495.497a.21.21 0 00.146.06h.187a.451.451 0 00.416-.27l.486.654a4.375 4.375 0 01-3.858 2.311c-.022 0-.042 0-.064-.002v-.04c0-.03.011-.057.032-.078a.108.108 0 01.077-.032.328.328 0 00.327-.326v-.29a.107.107 0 01.101-.107.265.265 0 00.238-.2.255.255 0 00-.009-.164.254.254 0 00-.105-.125l-.833-.531a.107.107 0 01-.05-.092v-.155a.267.267 0 00-.266-.264h-.134a.303.303 0 01-.303-.305.265.265 0 00-.266-.266h-1.218a.264.264 0 00-.264.266v.081c0 .027-.01.052-.027.072l-.277.324a.267.267 0 00-.062.152.258.258 0 00.041.16l.181.292a.216.216 0 00.051.06l.663.578a.115.115 0 01.037.083v.354A4.38 4.38 0 01299.125 5c0-.02 0-.042.002-.063.053.286.217.538.456.704l1.04.78a.076.076 0 00.086.004.077.077 0 00.039-.068.088.088 0 00-.01-.038l-.475-.792c-.008-.016-.008-.022-.01-.022a.083.083 0 01.022-.018l.13-.071a.083.083 0 00.039-.072.08.08 0 00-.044-.067l-.323-.157a.053.053 0 01-.03-.052l.008-.187c0-.007.001-.014.004-.02a.057.057 0 01.052-.031l.397.017a.044.044 0 01.037.017l.346.375a.201.201 0 00.225.056.211.211 0 00.14-.19l.008-.208a.056.056 0 01.017-.037l.507-.466a.07.07 0 01.04-.016l.377.017a.213.213 0 00.199-.12.217.217 0 00.019-.08l.01-.222c0-.006.001-.013.004-.02a.053.053 0 01.013-.015l.434-.4a.21.21 0 00.066-.143l.022-.367c.005-.105-.074-.267-.202-.273l-.434-.016a.217.217 0 00-.222.219.047.047 0 01-.006.017.045.045 0 01-.014.01.083.083 0 01-.071.005c-.112-.053-.156-.243-.184-.368l-.014-.053a.052.052 0 010-.025.06.06 0 01.011-.022.05.05 0 01.02-.016.055.055 0 01.025-.004l.661.028a.473.473 0 00.45-.274.466.466 0 00.042-.18l.019-.442a.21.21 0 00-.201-.218l-.205-.008a.055.055 0 01-.036-.015.057.057 0 01-.016-.035c0-.378-.193-.428-.276-.431a.521.521 0 00-.353.137.315.315 0 01-.21.095.16.16 0 01-.083-.026.162.162 0 01-.056-.067l-.004-.011a4.318 4.318 0 012.146-.42l.114.3a.242.242 0 00.224.155h.591c.019-.002.038.005.053.018l.411.336a.08.08 0 01.029.074.077.077 0 01-.014.038.088.088 0 01-.031.027l-.047.026a.233.233 0 00-.075.064.23.23 0 00-.044.088.252.252 0 00-.004.099.222.222 0 00.036.092l.293.443c.025.038.06.067.1.086l.303.138a.086.086 0 01.036.031.09.09 0 01.013.045v.544a.243.243 0 00.087.186.076.076 0 01.033.057.075.075 0 01-.022.062l-.297.339a.292.292 0 00.416.406l.658-.598a.24.24 0 00.069-.112.236.236 0 00.001-.132.216.216 0 01-.006-.036.136.136 0 01.042-.097.147.147 0 01.1-.039l.125.005z" />
        <Path d="M304.142 1.42h-.356a.077.077 0 01-.027-.004l-.323-.1a.083.083 0 00-.069.012.08.08 0 00-.024.027.073.073 0 00-.009.036V1.6a.336.336 0 00.007.055l.215.96a.25.25 0 00.189.188.33.33 0 00.053.005.243.243 0 00.197-.1l.346-.463a.256.256 0 00.05-.148v-.43a.25.25 0 00-.249-.247z" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_434"
          x1={6.5}
          y1={5.5}
          x2={298.5}
          y2={5.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE000" />
          <Stop offset={1} stopColor="#FF9111" />
        </LinearGradient>
        <ClipPath id="clip0_1_434">
          <Path fill="#fff" transform="translate(298.5)" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const LeafIcon = (props: SvgProps) => {
  return (
    <Svg width={26} height={27} viewBox="0 0 26 27" fill="none" {...props}>
      <Path
        d="M6.753 23.234a4.577 4.577 0 00-.278.278c.073.106.146.207.224.302a3.912 3.912 0 002.761 1.582 4.039 4.039 0 003.236-1.407 4.941 4.941 0 00-1.066-1.135 3.816 3.816 0 00-.884-.5 3.557 3.557 0 00-.784-.213c-.08-.01-.158-.021-.24-.027l-.107-.005c-.069-.006-.138-.003-.205-.005l-.137.001c-.04 0-.08.004-.119.013a.569.569 0 00-.116.007c-.09.01-.178.033-.268.053l-.031.011a1.11 1.11 0 00-.168.035 3.555 3.555 0 00-.593.216 1.996 1.996 0 00-.24.118l-.182.106c-.115.071-.234.15-.355.235l-.19.148-.14.122-.085.071-.033-.006zm4.214-1.242a3.576 3.576 0 00-.856-.254l-.112-.078.074-.16.023-.056c.021-.046.045-.09.072-.132l.176-.316c.065-.103.13-.202.197-.297l.103-.14c.036-.047.074-.088.11-.132l.109-.128c.036-.044.076-.085.119-.122l.103-.104.112-.116.124-.098.124-.094c.086-.063.176-.12.269-.173l.386-.14a3.55 3.55 0 01.44-.16l.129-.047a3.36 3.36 0 011.181-.077c.075.012.15.025.228.032.4.072.786.2 1.15.38.27.117.53.257.775.42a4.035 4.035 0 01-2.585 2.42 3.472 3.472 0 01-1.64.054 4.389 4.389 0 00-.811-.482zm4.336-2.885a4.231 4.231 0 00-2.57-.34 7.656 7.656 0 01-.329-.163 4.62 4.62 0 01.113-.346 3.819 3.819 0 01.143-.348l.017-.037a.71.71 0 01.067-.143l.013-.027.02-.038a3.27 3.27 0 01.25-.404c.06-.08.122-.164.186-.245.063-.08.099-.115.154-.17.04-.048.085-.092.133-.133a.253.253 0 01.056-.051c.038-.04.08-.077.123-.111l.023-.009c.053-.049.109-.094.167-.136l.031-.011c.08-.06.163-.116.25-.166l.157-.088.277-.1c.212-.091.433-.158.66-.201a3.708 3.708 0 011.26-.017c.557.086 1.095.27 1.588.543a4.044 4.044 0 01-2.233 2.729 3.31 3.31 0 01-.556.012zm1.235-3.884a4.147 4.147 0 00-1.269.02 4.984 4.984 0 01-.88-.187l-.024.009.013-.11c.028-.323.09-.642.184-.95a4.62 4.62 0 01.205-.517l.05-.106a.257.257 0 01.034-.075l.059-.131c.083-.153.177-.301.28-.442l.077-.103.116-.13.074-.076.028-.01c.045-.049.093-.095.144-.137.073-.066.148-.128.227-.188l.072-.057.074-.027a3.733 3.733 0 012.466-.575c.354.033.704.104 1.044.211a4.039 4.039 0 01-1.672 3.107c-.398.244-.841.405-1.302.474zm-.318-3.857a4.493 4.493 0 01-.09-1.764 3.443 3.443 0 01.603-1.508c.164-.245.362-.465.587-.655.126-.112.263-.212.407-.299a3.63 3.63 0 01.666-.33 4.746 4.746 0 011.478-.318 4.04 4.04 0 01-.457 3.5c-.272.384-.622.708-1.026.951a4.148 4.148 0 00-2.166.418l-.002.005zm-6.914 10.32a3.32 3.32 0 00-.65.08c-.158.03-.312.072-.462.127a4.643 4.643 0 00-1.602.936 3.44 3.44 0 01-.595-1.394 4.049 4.049 0 011.076-3.363 4.8 4.8 0 011.075.783c.21.195.395.413.554.65.199.288.351.605.452.94.046.131.08.266.103.403.053.277.07.559.05.839zm2.153-4.407c.16.295.275.611.342.94.03.08.043.168.042.262.022.189.027.379.017.568A4.464 4.464 0 009.8 21.124l-.024.044-.046.091c-.017-.046-.005-.1-.01-.146-.003-.047-.018-.051-.026-.074-.009-.024-.026-.168-.04-.246a3.117 3.117 0 00-.125-.476 3.8 3.8 0 00-.501-1.036 4.121 4.121 0 00-.504-.607 4.078 4.078 0 011.303-3.091c.182.117.357.245.524.383.258.206.491.44.696.7.152.19.284.394.395.611l.018.002zm2.496-2.334c.017.046.016.104.022.155.005.051.02.188.026.278l.01.027c.006.105.006.21-.001.314a4.41 4.41 0 00-1.825 2.262 3.988 3.988 0 00-.765-1.58l-.068-.077a4.941 4.941 0 00-.612-.59c-.021-.058-.042-.116-.031-.182a4.052 4.052 0 011.201-3.333c.12.071.23.146.342.224a4.21 4.21 0 011.48 1.761c.103.237.177.486.221.74zm1.659-4.188c.01.034.022.068.037.101.038.283.04.57.006.854a4.197 4.197 0 00-1.507 2.275l-.06-.044a4.65 4.65 0 00-1.466-1.758 3.435 3.435 0 01-.247-.886 4.065 4.065 0 011.218-3.313 4.052 4.052 0 012.019 2.77zm.778-2.932a3.83 3.83 0 00-.657 1.554 3.877 3.877 0 01-.345-.232 4.793 4.793 0 00-.985-1.067 3.534 3.534 0 01-.342-.759 4.05 4.05 0 01.639-3.472c.392.154.762.357 1.103.605a4.597 4.597 0 001.219 2.682c-.236.21-.446.448-.625.708l-.007-.02zM18.2 6.45a3.95 3.95 0 00-.664.335l-.138.094a4.459 4.459 0 01-1.08-2.035 3.488 3.488 0 01-.041-1.19 4.043 4.043 0 012.05-2.857 4.036 4.036 0 011.208 3.318A3.758 3.758 0 0118.2 6.45z"
        fill="rgba(255, 255, 255, 1)"
      />
    </Svg>
  );
};
export const WindIcon = (props: SvgProps) => {
  return (
    <Svg width={15} height={12} viewBox="0 0 15 12" fill="none" {...props}>
      <Path
        d="M12.456 2.27A2.16 2.16 0 0010.3 4.428a.48.48 0 00.958 0 1.198 1.198 0 111.198 1.198H.716a.48.48 0 00-.478.479c0 .264.215.48.479.48h11.74a2.16 2.16 0 002.155-2.157 2.16 2.16 0 00-2.156-2.156z"
        fill="#fff"
      />
      <Path
        d="M3.592 4.667h4.073A2.16 2.16 0 009.82 2.51 2.16 2.16 0 007.665.354 2.16 2.16 0 005.508 2.51a.48.48 0 00.958 0 1.198 1.198 0 111.199 1.198H3.592a.48.48 0 00-.48.48c0 .263.216.479.48.479zM10.06 7.542H2.154a.48.48 0 00-.479.479c0 .263.216.479.48.479h7.905a1.198 1.198 0 11-1.197 1.198.48.48 0 00-.48-.48.48.48 0 00-.479.48 2.16 2.16 0 002.156 2.156 2.16 2.16 0 002.157-2.156A2.16 2.16 0 0010.06 7.54z"
        fill="#fff"
      />
    </Svg>
  );
};
export const CloseIcon = (props: SvgProps) => {
  return (
    <Svg width={10} height={11} viewBox="0 0 10 11" fill="none" {...props}>
      <G clipPath="url(#clip0_1_748)">
        <Path
          d="M5.916 5.508L9.81 1.614a.647.647 0 10-.916-.916L5 4.592 1.106.698a.647.647 0 10-.916.916l3.894 3.894L.19 9.402a.647.647 0 10.916.916L5 6.424l3.894 3.894a.646.646 0 00.916 0 .647.647 0 000-.916L5.916 5.508z"
          fill="#FF6B00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_748">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const SolarFlareIcon = (props: SvgProps) => {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
      <G clipPath="url(#clip0_48_93)">
        <Path
          d="M18.55 37.1c10.245 0 18.55-8.305 18.55-18.55C37.1 8.305 28.795 0 18.55 0 8.305 0 0 8.305 0 18.55 0 28.795 8.305 37.1 18.55 37.1z"
          fill="url(#paint0_radial_48_93)"
        />
        <Path
          d="M18.55 3.829c-.09.285-.136.571-.169.857a7.912 7.912 0 000 1.714c.034.285.08.57.169.857a4.66 4.66 0 00.168-.857 7.887 7.887 0 000-1.714 4.613 4.613 0 00-.168-.857z"
          fill="url(#paint1_radial_48_93)"
        />
        <Path
          d="M18.55 29.843c-.09.286-.136.572-.169.857a7.912 7.912 0 000 1.714c.034.286.08.572.169.857a4.66 4.66 0 00.168-.857 7.887 7.887 0 000-1.714 4.615 4.615 0 00-.168-.857z"
          fill="url(#paint2_radial_48_93)"
        />
        <Path
          d="M31.557 18.335c-.285 0-.571.015-.857.047-.285.033-.571.079-.857.168.286.089.572.135.857.168a7.835 7.835 0 001.714 0c.286-.033.572-.079.857-.168a4.611 4.611 0 00-.857-.169 7.734 7.734 0 00-.857-.046z"
          fill="url(#paint3_radial_48_93)"
        />
        <Path
          d="M5.543 18.764c.285 0 .571-.014.857-.046.285-.033.57-.079.857-.168a4.613 4.613 0 00-.857-.169 7.887 7.887 0 00-1.714 0 4.67 4.67 0 00-.857.169c.285.089.571.135.857.168.285.031.57.046.857.046z"
          fill="url(#paint4_radial_48_93)"
        />
        <Path
          d="M27.26 10.077a7.876 7.876 0 001.212-1.211c.179-.226.348-.46.487-.725-.265.138-.5.308-.725.486a7.874 7.874 0 00-1.211 1.212c-.18.226-.349.46-.488.726.265-.14.5-.309.725-.488z"
          fill="url(#paint5_radial_48_93)"
        />
        <Path
          d="M9.84 27.022a7.885 7.885 0 00-1.212 1.212c-.179.226-.348.46-.488.725.265-.139.5-.308.725-.487a7.892 7.892 0 001.213-1.211 4.6 4.6 0 00.486-.725c-.265.138-.5.308-.725.486z"
          fill="url(#paint6_radial_48_93)"
        />
        <Path
          d="M27.899 27.596a7.892 7.892 0 00-.639-.573 4.652 4.652 0 00-.725-.487c.14.264.31.499.488.724a7.892 7.892 0 001.211 1.213c.225.178.46.348.725.487a4.62 4.62 0 00-.486-.726 7.716 7.716 0 00-.574-.638z"
          fill="url(#paint7_radial_48_93)"
        />
        <Path
          d="M9.2 9.504c.202.202.415.394.639.574.225.179.46.348.725.487a4.62 4.62 0 00-.487-.726 7.888 7.888 0 00-1.212-1.212 4.661 4.661 0 00-.725-.486c.14.264.309.499.487.724.18.225.372.437.574.64z"
          fill="url(#paint8_radial_48_93)"
        />
        <Path
          d="M23.585 6.555c.107-.265.2-.536.276-.813a4.61 4.61 0 00.162-.858c-.189.232-.338.48-.475.733a7.904 7.904 0 00-.637 1.591c-.075.278-.138.56-.162.858.188-.232.337-.48.474-.733.136-.253.256-.513.362-.778z"
          fill="url(#paint9_radial_48_93)"
        />
        <Path
          d="M13.514 30.545a7.903 7.903 0 00-.275.813 4.67 4.67 0 00-.163.858c.189-.232.338-.48.475-.733a7.914 7.914 0 00.637-1.591c.076-.278.14-.56.163-.859-.19.232-.339.48-.476.733a7.757 7.757 0 00-.36.779z"
          fill="url(#paint10_radial_48_93)"
        />
        <Path
          d="M30.704 23.188a7.886 7.886 0 00-.813-.276 4.664 4.664 0 00-.858-.163c.233.189.48.338.733.475a7.938 7.938 0 001.592.638c.277.075.56.139.858.162a4.63 4.63 0 00-.733-.475 7.755 7.755 0 00-.779-.361z"
          fill="url(#paint11_radial_48_93)"
        />
        <Path
          d="M6.396 13.912c.265.107.536.2.812.277.278.075.56.138.859.162a4.618 4.618 0 00-.733-.475 7.88 7.88 0 00-1.591-.637 4.67 4.67 0 00-.859-.163c.233.189.48.338.733.475.254.135.514.255.779.361z"
          fill="url(#paint12_radial_48_93)"
        />
        <Path
          d="M29.654 13.615c-.25.143-.494.297-.722.491.298-.03.579-.1.854-.182a7.905 7.905 0 001.576-.674 4.62 4.62 0 00.722-.493c-.298.03-.579.1-.854.183a7.892 7.892 0 00-1.575.675z"
          fill="url(#paint13_radial_48_93)"
        />
        <Path
          d="M7.446 23.486a4.61 4.61 0 00.722-.492c-.298.03-.579.1-.855.182a7.9 7.9 0 00-1.575.675c-.25.143-.494.297-.722.491.298-.03.578-.1.854-.182a7.855 7.855 0 001.576-.674z"
          fill="url(#paint14_radial_48_93)"
        />
        <Path
          d="M23.865 30.424a7.902 7.902 0 00-.38-.77 4.663 4.663 0 00-.491-.722c.03.298.1.579.183.854a7.88 7.88 0 00.673 1.576c.143.25.298.494.493.722a4.61 4.61 0 00-.183-.855 7.747 7.747 0 00-.295-.805z"
          fill="url(#paint15_radial_48_93)"
        />
        <Path
          d="M13.614 7.446c.143.25.298.494.492.721-.03-.297-.1-.578-.182-.854a7.878 7.878 0 00-.675-1.575 4.663 4.663 0 00-.491-.722c.03.298.1.578.182.854a7.902 7.902 0 00.674 1.576z"
          fill="url(#paint16_radial_48_93)"
        />
        <Path
          d="M21.319 5.839c.056-.28.098-.563.124-.85.023-.286.034-.575.003-.873a4.621 4.621 0 00-.334.807 7.885 7.885 0 00-.336 1.68 4.662 4.662 0 00-.004.874c.143-.262.244-.534.333-.807.087-.274.157-.551.214-.831z"
          fill="url(#paint17_radial_48_93)"
        />
        <Path
          d="M15.995 30.43a7.935 7.935 0 00-.337 1.68 4.662 4.662 0 00-.004.873 4.66 4.66 0 00.334-.807 7.938 7.938 0 00.337-1.68c.024-.287.035-.576.004-.874a4.61 4.61 0 00-.334.807z"
          fill="url(#paint18_radial_48_93)"
        />
        <Path
          d="M31.345 20.898a7.91 7.91 0 00-.85-.123 4.662 4.662 0 00-.873-.004c.263.144.534.245.808.334a7.931 7.931 0 001.68.337c.287.024.576.035.873.004a4.604 4.604 0 00-.807-.334 7.743 7.743 0 00-.83-.214z"
          fill="url(#paint19_radial_48_93)"
        />
        <Path
          d="M5.755 16.201c.28.057.563.098.849.124.286.024.576.035.873.003a4.605 4.605 0 00-.807-.333 7.935 7.935 0 00-1.68-.337 4.67 4.67 0 00-.874-.004c.263.143.534.245.808.333.273.087.55.158.83.214z"
          fill="url(#paint20_radial_48_93)"
        />
        <Path
          d="M27.95 12.291c.287-.084.55-.204.807-.335a7.894 7.894 0 001.427-.95c.22-.185.432-.382.62-.615-.287.084-.55.204-.807.335a7.918 7.918 0 00-1.427.95c-.219.186-.431.383-.62.615z"
          fill="url(#paint21_radial_48_93)"
        />
        <Path
          d="M9.15 24.809c-.288.084-.551.203-.807.334a7.876 7.876 0 00-1.426.95c-.22.187-.432.383-.62.615.286-.084.55-.204.806-.335a7.855 7.855 0 001.427-.95c.22-.185.431-.382.62-.614z"
          fill="url(#paint22_radial_48_93)"
        />
        <Path
          d="M25.937 29.258a7.936 7.936 0 00-.514-.688 4.681 4.681 0 00-.614-.62c.084.287.204.55.335.807a7.894 7.894 0 00.95 1.427c.185.22.382.431.614.62a4.6 4.6 0 00-.334-.807 7.76 7.76 0 00-.437-.739z"
          fill="url(#paint23_radial_48_93)"
        />
        <Path
          d="M11.163 7.841c.158.238.329.468.513.688.186.22.383.432.615.62a4.617 4.617 0 00-.334-.807 7.928 7.928 0 00-.95-1.426 4.675 4.675 0 00-.615-.62c.084.287.204.55.335.806.132.255.278.501.436.74z"
          fill="url(#paint24_radial_48_93)"
        />
        <Path
          d="M25.339 8.472a7.887 7.887 0 00.938-1.434c.129-.258.247-.522.328-.81-.23.19-.426.404-.61.625a7.918 7.918 0 00-.937 1.435 4.67 4.67 0 00-.328.81c.23-.191.425-.405.609-.626z"
          fill="url(#paint25_radial_48_93)"
        />
        <Path
          d="M11.76 28.628a7.885 7.885 0 00-.937 1.435 4.658 4.658 0 00-.328.809c.23-.19.425-.405.61-.626a7.828 7.828 0 00.938-1.434 4.61 4.61 0 00.328-.81 4.61 4.61 0 00-.61.626z"
          fill="url(#paint26_radial_48_93)"
        />
        <Path
          d="M30.247 25.995a7.852 7.852 0 00-1.435-.937 4.67 4.67 0 00-.81-.329c.19.23.405.426.626.61a7.88 7.88 0 001.434.938c.257.129.521.246.81.328a4.616 4.616 0 00-.625-.61z"
          fill="url(#paint27_radial_48_93)"
        />
        <Path
          d="M6.853 11.104a7.876 7.876 0 001.435.939c.257.128.521.246.81.327a4.612 4.612 0 00-.626-.61 7.896 7.896 0 00-1.435-.937 4.678 4.678 0 00-.809-.328c.19.23.405.425.625.61z"
          fill="url(#paint28_radial_48_93)"
        />
        <Path
          d="M30.408 15.895a4.666 4.666 0 00-.805.34c.298.029.587.015.874-.01a7.898 7.898 0 001.678-.352c.273-.09.542-.194.804-.34a4.614 4.614 0 00-.874.01 7.927 7.927 0 00-1.677.352z"
          fill="url(#paint29_radial_48_93)"
        />
        <Path
          d="M6.692 21.205c.273-.09.543-.195.804-.34a4.614 4.614 0 00-.873.01 7.85 7.85 0 00-1.678.352c-.272.09-.542.194-.804.34.298.028.587.015.873-.011a7.848 7.848 0 001.678-.351z"
          fill="url(#paint30_radial_48_93)"
        />
        <Path
          d="M21.425 31.237a7.896 7.896 0 00-.22-.83 4.666 4.666 0 00-.34-.803c-.03.297-.016.586.01.873a7.852 7.852 0 00.351 1.678c.091.273.195.542.34.804a4.614 4.614 0 00-.01-.874 7.724 7.724 0 00-.13-.848z"
          fill="url(#paint31_radial_48_93)"
        />
        <Path
          d="M15.895 6.692c.09.273.195.543.34.804a4.614 4.614 0 00-.01-.873 7.795 7.795 0 00-.352-1.678 4.661 4.661 0 00-.34-.804c-.028.298-.015.587.011.873a7.901 7.901 0 00.351 1.678z"
          fill="url(#paint32_radial_48_93)"
        />
        <Path
          d="M18.55 30.059c6.356 0 11.509-5.153 11.509-11.51 0-6.355-5.153-11.508-11.509-11.508-6.356 0-11.509 5.153-11.509 11.509 0 6.356 5.153 11.509 11.509 11.509z"
          fill="url(#paint33_radial_48_93)"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.591 18.55) scale(17.5152)"
        >
          <Stop stopColor="#FFE000" />
          <Stop offset={1} stopColor="#FFE000" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.179 18.648) scale(14.0875)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.179 44.663) scale(14.0875)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(44.585 20.19) scale(13.9951)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.571 20.19) scale(13.9951)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint5_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.96 18.62) scale(13.9333)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint6_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.565 37.015) scale(13.9333)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint7_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.96 37.015) scale(13.9333)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint8_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.565 18.62) scale(13.9333)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint9_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(13.9667 0 0 13.9668 28.23 18.642)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint10_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.557 42.79) scale(13.9668)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint11_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(42.718 28.26) scale(13.8984)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint12_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.57 18.587) scale(13.8984)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint13_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(42.485 18.589) scale(13.9006)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint14_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.57 28.825) scale(13.9006)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint15_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.794 42.556) scale(13.9653)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint16_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.558 18.641) scale(13.9653)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint17_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.817 18.647) scale(14.0075)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint18_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.7 44.152) scale(14.0075)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint19_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(44.077 23.833) scale(13.9209)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint20_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.57 18.716) scale(13.9209)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint21_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.221 18.605) scale(13.9144)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint22_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.568 33.021) scale(13.9144)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint23_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32.978 40.286) scale(13.9508)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint24_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.562 18.632) scale(13.9508)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint25_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32.796 18.633) scale(13.9515)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint26_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.561 40.407) scale(13.9515)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint27_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.342 32.839) scale(13.9137)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint28_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(13.9137 0 0 13.9136 18.568 18.604)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint29_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(44.032 18.693) scale(13.9173)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint30_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.57 24.024) scale(13.9173)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint31_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.007 44.109) scale(14.0031)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint32_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.676 18.647) scale(14.0031)"
        >
          <Stop stopColor="#FF9111" />
          <Stop offset={0.168} stopColor="#FF961A" stopOpacity={0.832} />
          <Stop offset={0.447} stopColor="#FFA534" stopOpacity={0.553} />
          <Stop offset={0.8} stopColor="#FFBD5D" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#FFCD77" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint33_radial_48_93"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.66 13.636) scale(18.594)"
        >
          <Stop stopColor="#FEFFB3" />
          <Stop offset={0.196} stopColor="#FEFEB0" />
          <Stop offset={0.347} stopColor="#FEF9A6" />
          <Stop offset={0.484} stopColor="#FEF296" />
          <Stop offset={0.612} stopColor="#FEE87E" />
          <Stop offset={0.733} stopColor="#FEDA60" />
          <Stop offset={0.85} stopColor="#FFCA3C" />
          <Stop offset={0.962} stopColor="#FFB611" />
          <Stop offset={1} stopColor="#FFAF00" />
        </RadialGradient>
        <ClipPath id="clip0_48_93">
          <Path fill="#fff" d="M0 0H37.1V37.1H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const GeoMagneticStormIcon = (props: SvgProps) => {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
      <G clipPath="url(#clip0_48_390)">
        <Circle
          cx={18.55}
          cy={18.55}
          r={18.55}
          fill="url(#paint0_radial_48_390)"
        />
        <Path
          d="M19 7c-.257 0-.512.008-.765.024l-9.99 6.648A11.95 11.95 0 007 19c0 3.51 1.507 6.668 3.909 8.862 0 0 3.91 2.69 8.09 2.69 5.594 0 11.413-4.925 11.413-11.552 0-7.858-7.477-11.34-7.477-11.34A11.983 11.983 0 0019 7z"
          fill="#008CDF"
        />
        <Path
          d="M30.882 17.314l-2.909-.332c0 6.627-5.372 12-12 12-1.81 0-3.525-.403-5.064-1.12a12.014 12.014 0 003.163 2.082l.707-.04.896.629c1.056.303 2.171.466 3.325.466 6.627 0 12-5.372 12-12 0-.572-.04-1.134-.118-1.685z"
          fill="#0069D0"
        />
        <Path
          d="M24.077 8.123c-.37-.173-.752-.328-1.142-.463l-1.061.933a.774.774 0 00-.146 1.01.79.79 0 00.97.283l.215-.091a.747.747 0 01.787.12.734.734 0 01-.112 1.182l-2.492 1.475a1.58 1.58 0 00-.786 1.377c.01.587.34 1.066 1 1.127 1.37.126 1.173-1.325 1.977-1.325h2.757c.42 0 .784.314.82.732a.804.804 0 01-.8.876h-3.307c-1.286 0-2.408.991-2.447 2.277a2.349 2.349 0 002.348 2.42h.336c.642 0 1.162.52 1.162 1.162v4.127c0 .122.021.243.062.356l.97-.02 3.025-4.918.388-2.819.986-1.427s-1.906-6.709-5.51-8.394z"
          fill="#98DB7C"
        />
        <Path
          d="M30.882 17.314c-.573-4.08-3.206-7.504-6.805-9.19a12 12 0 013.896 8.858c0 3.436-1.44 6.531-3.755 8.719a.927.927 0 001.012.62c.298-.043.55-.243.7-.505l2.864-5.05c.253-.447.318-.977.181-1.472l-.222-.801a.387.387 0 01.414-.489l.158.017c.425.045.85-.089 1.172-.37l.385-.337z"
          fill="#77CC7D"
        />
        <Path
          d="M18.888 8.06l-.653-1.036a11.996 11.996 0 00-9.99 6.648L9 18.896c.085.586.433 1.101.946 1.398a.7.7 0 01.306.849l-.258.696a1.548 1.548 0 00.486 1.749l.69.55c.235.188.424.428.55.703l1.792 3.887 1.047.74.74-.505-.269-1.12a2.71 2.71 0 01.228-1.876l1.163-2.248c.32-.62.027-1.38-.627-1.623l-.956-.354a.774.774 0 01-.504-.726v-.074a.774.774 0 00-.774-.775H11.9c-.407 0-.807-.107-1.16-.31l-.405-.233a1.158 1.158 0 01-.568-.838l-.026-.179c-.065-.45.14-.897.522-1.143l.238-.153a.774.774 0 01.924.065l.212.183c.259.223.661.09.738-.242l.226-.986c.12-.525.506-.95 1.017-1.121l1.67-.56a.774.774 0 00.407-1.15l-.76-1.193a.774.774 0 00-.98-.287l-.626.293c-.325.151-.729.086-.948-.197a.744.744 0 01.23-1.108l1.576-.866a1.161 1.161 0 011.515.36l.147.213c.216.315.574.504.957.504h.709c.47 0 .893-.284 1.073-.718l.422-1.022a1.548 1.548 0 00-.122-1.418z"
          fill="#98DB7C"
        />
        <Path
          d="M14.072 29.945c.516.232 1.051.43 1.603.588l-.376-1.57a11.926 11.926 0 01-1.786-.235l.56 1.217z"
          fill="#77CC7D"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_48_390"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 18.55) scale(18.55)"
        >
          <Stop stopColor="#008CDF" />
          <Stop offset={0.25} stopColor="#008CDF" />
          <Stop offset={0.629808} stopColor="#3FB7FF" />
          <Stop offset={1} stopColor="#008CDF" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="clip0_48_390">
          <Path fill="#fff" d="M0 0H37.1V37.1H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
