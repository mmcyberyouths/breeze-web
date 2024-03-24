const GetawayIcon = ({ width = '40', height = '40' }: IconPropsInterface) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M40 0H0V40H40V0Z" fill="url(#pattern_getaway)" />
      <defs>
        <pattern id="pattern_getaway" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_44_275" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_44_275"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default GetawayIcon
