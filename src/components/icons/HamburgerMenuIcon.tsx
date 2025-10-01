const HamburgerMenuIcon = ({ className = "", fill = "black" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="1" fill={fill} />
    <rect y="4" width="10" height="1" fill={fill} />
    <rect y="8" width="10" height="1" fill={fill} />
  </svg>
)

export default HamburgerMenuIcon
