import './layout.css';
import person from '../person.png'
function Layout() {
  const lens = <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.1191 18.3129L16.4113 14.6329C17.8505 12.8373 18.5475 10.5582 18.3589 8.26415C18.1704 5.97016 17.1105 3.83564 15.3974 2.2995C13.6843 0.76336 11.448 -0.0576363 9.14852 0.00532409C6.84901 0.0682845 4.66099 1.01042 3.03438 2.638C1.40777 4.26558 0.466194 6.45489 0.403271 8.75578C0.340348 11.0567 1.16086 13.2942 2.69608 15.0084C4.23131 16.7225 6.36456 17.783 8.65719 17.9717C10.9498 18.1604 13.2276 17.463 15.0221 16.0229L18.6999 19.7029C18.7928 19.7966 18.9034 19.871 19.0252 19.9217C19.1469 19.9725 19.2776 19.9987 19.4095 19.9987C19.5414 19.9987 19.6721 19.9725 19.7938 19.9217C19.9156 19.871 20.0262 19.7966 20.1191 19.7029C20.2992 19.5164 20.3999 19.2672 20.3999 19.0079C20.3999 18.7485 20.2992 18.4993 20.1191 18.3129ZM9.41544 16.0229C8.0318 16.0229 6.67922 15.6123 5.52876 14.8431C4.3783 14.074 3.48163 12.9807 2.95213 11.7016C2.42263 10.4226 2.28409 9.01509 2.55403 7.65722C2.82396 6.29935 3.49025 5.05207 4.46864 4.07311C5.44702 3.09414 6.69356 2.42745 8.05062 2.15736C9.40768 1.88726 10.8143 2.02588 12.0926 2.5557C13.371 3.08551 14.4636 3.98272 15.2323 5.13386C16.001 6.28501 16.4113 7.63838 16.4113 9.02285C16.4113 10.8794 15.6742 12.6598 14.3622 13.9726C13.0503 15.2854 11.2709 16.0229 9.41544 16.0229Z" fill="#7C7C8D"/>
  </svg>
  const pell = <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.2004 13.449V9.62358C17.1987 7.91915 16.5953 6.27032 15.4971 4.9691C14.399 3.66788 12.8769 2.79823 11.2004 2.51416V1.20295C11.2004 0.883906 11.074 0.577931 10.8489 0.352335C10.6239 0.126739 10.3186 0 10.0004 0C9.68213 0 9.3769 0.126739 9.15186 0.352335C8.92682 0.577931 8.80039 0.883906 8.80039 1.20295V2.51416C7.12392 2.79823 5.60182 3.66788 4.50365 4.9691C3.40549 6.27032 2.80211 7.91915 2.80039 9.62358V13.449C2.10013 13.6971 1.49359 14.1564 1.06392 14.7637C0.634245 15.371 0.402478 16.0967 0.400391 16.8413V19.2472C0.400391 19.5662 0.526819 19.8722 0.751863 20.0978C0.976906 20.3234 1.28213 20.4501 1.60039 20.4501H5.36839C5.64473 21.4694 6.24799 22.3693 7.08511 23.0109C7.92222 23.6524 8.94667 24 10.0004 24C11.0541 24 12.0786 23.6524 12.9157 23.0109C13.7528 22.3693 14.356 21.4694 14.6324 20.4501H18.4004C18.7186 20.4501 19.0239 20.3234 19.2489 20.0978C19.474 19.8722 19.6004 19.5662 19.6004 19.2472V16.8413C19.5983 16.0967 19.3665 15.371 18.9369 14.7637C18.5072 14.1564 17.9006 13.6971 17.2004 13.449V13.449ZM5.20039 9.62358C5.20039 8.34741 5.7061 7.12351 6.60628 6.22113C7.50645 5.31874 8.72735 4.81179 10.0004 4.81179C11.2734 4.81179 12.4943 5.31874 13.3945 6.22113C14.2947 7.12351 14.8004 8.34741 14.8004 9.62358V13.2324H5.20039V9.62358ZM10.0004 21.6531C9.58156 21.6505 9.17068 21.5381 8.80859 21.3271C8.4465 21.1161 8.1458 20.8137 7.93639 20.4501H12.0644C11.855 20.8137 11.5543 21.1161 11.1922 21.3271C10.8301 21.5381 10.4192 21.6505 10.0004 21.6531ZM17.2004 18.0442H2.80039V16.8413C2.80039 16.5222 2.92682 16.2162 3.15186 15.9906C3.37691 15.7651 3.68213 15.6383 4.00039 15.6383H16.0004C16.3186 15.6383 16.6239 15.7651 16.8489 15.9906C17.074 16.2162 17.2004 16.5222 17.2004 16.8413V18.0442Z" fill="#7C7C8D"/>
  <circle cx="14.9004" cy="6.5" r="3.75" fill="#FF5E6F" stroke="white" stroke-width="1.5"/>
  </svg>
  
  const logo = <svg width="109" height="31" viewBox="0 0 109 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="2.0752" width="26.914" height="26.85" rx="6" fill="#A162F7"/>
  <path d="M9.1273 21.7072L10.8492 19.9853C6.48698 17.345 7.21403 13.3367 8.12284 11.6626L13.5039 16.9002L18.885 11.6626C20.9513 16.1396 17.8805 19.0287 16.0868 19.9136L17.9523 21.7072C24.6248 16.6849 21.3961 9.94063 18.885 8.0752L13.5039 13.4563L7.97934 8.0752C2.09602 13.815 6.25741 20.2723 9.1273 21.7072Z" fill="white"/>
  <path d="M40.5461 24V7.2H44.1941L49.5461 17.856L54.8261 7.2H58.4741V24H55.4021V12.408L50.7221 21.6H48.2981L43.6181 12.408V24H40.5461ZM67.3736 24.288C66.2216 24.288 65.1816 24.024 64.2536 23.496C63.3416 22.968 62.6136 22.24 62.0696 21.312C61.5416 20.368 61.2776 19.28 61.2776 18.048C61.2776 16.816 61.5496 15.736 62.0936 14.808C62.6376 13.864 63.3656 13.128 64.2776 12.6C65.2056 12.072 66.2456 11.808 67.3976 11.808C68.5336 11.808 69.5576 12.072 70.4696 12.6C71.3976 13.128 72.1256 13.864 72.6536 14.808C73.1976 15.736 73.4696 16.816 73.4696 18.048C73.4696 19.28 73.1976 20.368 72.6536 21.312C72.1256 22.24 71.3976 22.968 70.4696 23.496C69.5416 24.024 68.5096 24.288 67.3736 24.288ZM67.3736 21.624C68.1736 21.624 68.8696 21.328 69.4616 20.736C70.0536 20.128 70.3496 19.232 70.3496 18.048C70.3496 16.864 70.0536 15.976 69.4616 15.384C68.8696 14.776 68.1816 14.472 67.3976 14.472C66.5816 14.472 65.8776 14.776 65.2856 15.384C64.7096 15.976 64.4216 16.864 64.4216 18.048C64.4216 19.232 64.7096 20.128 65.2856 20.736C65.8776 21.328 66.5736 21.624 67.3736 21.624ZM81.0515 24C79.8035 24 78.8035 23.696 78.0515 23.088C77.2995 22.48 76.9235 21.4 76.9235 19.848V14.664H74.8835V12.096H76.9235L77.2835 8.904H79.9955V12.096H83.2115V14.664H79.9955V19.872C79.9955 20.448 80.1155 20.848 80.3555 21.072C80.6115 21.28 81.0435 21.384 81.6515 21.384H83.1395V24H81.0515ZM87.5051 10.248C86.9451 10.248 86.4811 10.08 86.1131 9.744C85.7611 9.408 85.5851 8.984 85.5851 8.472C85.5851 7.96 85.7611 7.544 86.1131 7.224C86.4811 6.888 86.9451 6.72 87.5051 6.72C88.0651 6.72 88.5211 6.888 88.8731 7.224C89.2411 7.544 89.4251 7.96 89.4251 8.472C89.4251 8.984 89.2411 9.408 88.8731 9.744C88.5211 10.08 88.0651 10.248 87.5051 10.248ZM85.9691 24V12.096H89.0411V24H85.9691ZM95.4635 24L91.0955 12.096H94.3115L97.3355 21.096L100.36 12.096H103.576L99.1835 24H95.4635ZM105.872 24.168C105.312 24.168 104.848 23.992 104.48 23.64C104.128 23.288 103.952 22.864 103.952 22.368C103.952 21.856 104.128 21.424 104.48 21.072C104.848 20.72 105.312 20.544 105.872 20.544C106.432 20.544 106.888 20.72 107.24 21.072C107.608 21.424 107.792 21.856 107.792 22.368C107.792 22.864 107.608 23.288 107.24 23.64C106.888 23.992 106.432 24.168 105.872 24.168Z" fill="#1F2128"/>
  </svg>
  const dashboard = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5835 12.4997C14.2067 12.4997 13.6743 12.5518 13.12 12.6277C12.8611 12.6631 12.6636 12.8606 12.6282 13.1195C12.5523 13.6738 12.5002 14.2062 12.5002 14.583C12.5002 14.9598 12.5523 15.4922 12.6282 16.0465C12.6636 16.3054 12.8611 16.5029 13.12 16.5383C13.6743 16.6143 14.2067 16.6663 14.5835 16.6663C14.9603 16.6663 15.4927 16.6143 16.047 16.5383C16.3059 16.5029 16.5034 16.3054 16.5388 16.0465C16.6147 15.4922 16.6668 14.9598 16.6668 14.583C16.6668 14.2062 16.6147 13.6738 16.5388 13.1195C16.5034 12.8606 16.3059 12.6631 16.047 12.6277C15.4927 12.5518 14.9603 12.4997 14.5835 12.4997ZM12.8939 10.9764C11.8939 11.1134 11.1138 11.8935 10.9769 12.8934C10.8984 13.4669 10.8335 14.0898 10.8335 14.583C10.8335 15.0762 10.8984 15.6991 10.9769 16.2726C11.1138 17.2726 11.8939 18.0527 12.8939 18.1896C13.4674 18.2681 14.0903 18.333 14.5835 18.333C15.0767 18.333 15.6996 18.2681 16.2731 18.1896C17.2731 18.0527 18.0531 17.2726 18.1901 16.2726C18.2686 15.6991 18.3335 15.0762 18.3335 14.583C18.3335 14.0898 18.2686 13.4669 18.1901 12.8934C18.0531 11.8935 17.2731 11.1134 16.2731 10.9764C15.6996 10.8979 15.0767 10.833 14.5835 10.833C14.0903 10.833 13.4674 10.8979 12.8939 10.9764Z" fill="#5F6165"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4165 12.4997C5.03969 12.4997 4.50728 12.5518 3.95301 12.6277C3.69407 12.6631 3.49663 12.8606 3.46117 13.1195C3.38526 13.6738 3.33317 14.2062 3.33317 14.583C3.33317 14.9598 3.38526 15.4922 3.46117 16.0465C3.49663 16.3054 3.69407 16.5029 3.95301 16.5383C4.50728 16.6143 5.03969 16.6663 5.4165 16.6663C5.79332 16.6663 6.32573 16.6143 6.87999 16.5383C7.13893 16.5029 7.33638 16.3054 7.37184 16.0465C7.44775 15.4922 7.49984 14.9598 7.49984 14.583C7.49984 14.2062 7.44775 13.6738 7.37184 13.1195C7.33638 12.8606 7.13893 12.6631 6.87999 12.6277C6.32573 12.5518 5.79332 12.4997 5.4165 12.4997ZM3.72687 10.9764C2.72695 11.1134 1.94686 11.8935 1.80991 12.8934C1.73137 13.4669 1.6665 14.0898 1.6665 14.583C1.6665 15.0762 1.73137 15.6991 1.80991 16.2726C1.94686 17.2726 2.72695 18.0527 3.72687 18.1896C4.30037 18.2681 4.9233 18.333 5.4165 18.333C5.9097 18.333 6.53263 18.2681 7.10614 18.1896C8.10606 18.0527 8.88615 17.2726 9.02309 16.2726C9.10164 15.6991 9.1665 15.0762 9.1665 14.583C9.1665 14.0898 9.10164 13.4669 9.02309 12.8934C8.88615 11.8935 8.10606 11.1134 7.10614 10.9764C6.53263 10.8979 5.9097 10.833 5.4165 10.833C4.9233 10.833 4.30037 10.8979 3.72687 10.9764Z" fill="#5F6165"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5835 3.33366C14.2067 3.33366 13.6743 3.38575 13.12 3.46165C12.8611 3.49712 12.6636 3.69456 12.6282 3.9535C12.5523 4.50776 12.5002 5.04017 12.5002 5.41699C12.5002 5.79381 12.5523 6.32622 12.6282 6.88048C12.6636 7.13942 12.8611 7.33687 13.12 7.37233C13.6743 7.44824 14.2067 7.50033 14.5835 7.50033C14.9603 7.50033 15.4927 7.44824 16.047 7.37233C16.3059 7.33687 16.5034 7.13942 16.5388 6.88048C16.6147 6.32622 16.6668 5.79381 16.6668 5.41699C16.6668 5.04017 16.6147 4.50776 16.5388 3.9535C16.5034 3.69456 16.3059 3.49712 16.047 3.46165C15.4927 3.38575 14.9603 3.33366 14.5835 3.33366ZM12.8939 1.8104C11.8939 1.94734 11.1138 2.72744 10.9769 3.72736C10.8984 4.30086 10.8335 4.92379 10.8335 5.41699C10.8335 5.91019 10.8984 6.53312 10.9769 7.10663C11.1138 8.10655 11.8939 8.88664 12.8939 9.02358C13.4674 9.10213 14.0903 9.16699 14.5835 9.16699C15.0767 9.16699 15.6996 9.10213 16.2731 9.02358C17.2731 8.88664 18.0531 8.10655 18.1901 7.10663C18.2686 6.53312 18.3335 5.91019 18.3335 5.41699C18.3335 4.92379 18.2686 4.30086 18.1901 3.72736C18.0531 2.72744 17.2731 1.94734 16.2731 1.8104C15.6996 1.73186 15.0767 1.66699 14.5835 1.66699C14.0903 1.66699 13.4674 1.73186 12.8939 1.8104Z" fill="#5F6165"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4165 3.33366C5.03969 3.33366 4.50728 3.38575 3.95301 3.46165C3.69407 3.49712 3.49663 3.69456 3.46117 3.9535C3.38526 4.50776 3.33317 5.04017 3.33317 5.41699C3.33317 5.79381 3.38526 6.32622 3.46117 6.88048C3.49663 7.13942 3.69407 7.33687 3.95301 7.37233C4.50728 7.44824 5.03969 7.50033 5.4165 7.50033C5.79332 7.50033 6.32573 7.44824 6.87999 7.37233C7.13893 7.33687 7.33638 7.13942 7.37184 6.88048C7.44775 6.32622 7.49984 5.79381 7.49984 5.41699C7.49984 5.04017 7.44775 4.50776 7.37184 3.9535C7.33638 3.69456 7.13893 3.49712 6.87999 3.46165C6.32573 3.38575 5.79332 3.33366 5.4165 3.33366ZM3.72687 1.8104C2.72695 1.94734 1.94686 2.72744 1.80991 3.72736C1.73137 4.30086 1.6665 4.92379 1.6665 5.41699C1.6665 5.91019 1.73137 6.53312 1.80991 7.10663C1.94686 8.10655 2.72695 8.88664 3.72687 9.02358C4.30037 9.10213 4.9233 9.16699 5.4165 9.16699C5.9097 9.16699 6.53263 9.10213 7.10614 9.02358C8.10606 8.88664 8.88615 8.10655 9.02309 7.10663C9.10164 6.53312 9.1665 5.91019 9.1665 5.41699C9.1665 4.92379 9.10164 4.30086 9.02309 3.72736C8.88615 2.72744 8.10606 1.94734 7.10614 1.8104C6.53263 1.73186 5.9097 1.66699 5.4165 1.66699C4.9233 1.66699 4.30037 1.73186 3.72687 1.8104Z" fill="#5F6165"/>
  </svg>
   const car = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M17.3098 7.63L16.1698 4.20917C16.0045 3.71124 15.6864 3.27808 15.2608 2.97126C14.8352 2.66443 14.3237 2.49953 13.799 2.5H6.20067C5.67599 2.49953 5.16452 2.66443 4.73891 2.97126C4.3133 3.27808 3.99521 3.71124 3.82984 4.20917L2.68984 7.63C2.38701 7.75707 2.1284 7.97063 1.94637 8.24397C1.76435 8.51731 1.66699 8.83827 1.6665 9.16667V13.3333C1.6665 13.9608 2.019 14.5017 2.53234 14.7858C2.5215 14.8408 2.49984 14.8908 2.49984 14.9483V16.6667C2.49984 16.8877 2.58763 17.0996 2.74391 17.2559C2.9002 17.4122 3.11216 17.5 3.33317 17.5H4.1665C4.38752 17.5 4.59948 17.4122 4.75576 17.2559C4.91204 17.0996 4.99984 16.8877 4.99984 16.6667V15H14.9998V16.6667C14.9998 16.8877 15.0876 17.0996 15.2439 17.2559C15.4002 17.4122 15.6122 17.5 15.8332 17.5H16.6665C16.8875 17.5 17.0995 17.4122 17.2558 17.2559C17.412 17.0996 17.4998 16.8877 17.4998 16.6667V14.9483C17.4998 14.8908 17.4782 14.84 17.4673 14.7858C17.7285 14.6434 17.9466 14.4335 18.099 14.178C18.2513 13.9225 18.3321 13.6308 18.3332 13.3333V9.16667C18.3332 8.47583 17.9098 7.8825 17.3098 7.63ZM3.33317 13.3333V9.16667H16.6665L16.6682 13.3333H3.33317ZM6.20067 4.16667H13.7982C14.1573 4.16667 14.4757 4.395 14.589 4.73667L15.5107 7.5H4.489L5.40984 4.73667C5.46513 4.57066 5.57127 4.42627 5.71321 4.32397C5.85515 4.22166 6.0257 4.16663 6.20067 4.16667Z" fill="#72767C"/>
   <path d="M5.4165 12.5C6.10686 12.5 6.6665 11.9404 6.6665 11.25C6.6665 10.5596 6.10686 10 5.4165 10C4.72615 10 4.1665 10.5596 4.1665 11.25C4.1665 11.9404 4.72615 12.5 5.4165 12.5Z" fill="#72767C"/>
   <path d="M14.583 12.5C15.2734 12.5 15.833 11.9404 15.833 11.25C15.833 10.5596 15.2734 10 14.583 10C13.8927 10 13.333 10.5596 13.333 11.25C13.333 11.9404 13.8927 12.5 14.583 12.5Z" fill="#72767C"/>
   </svg>
    
  const sittings = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6244 5.909C16.6331 5.25809 16.3891 4.60444 15.8924 4.10777C15.3957 3.6111 14.7421 3.3671 14.0912 3.37576C14.0909 3.37576 14.0914 3.37576 14.0912 3.37576C13.7314 3.38065 13.3717 3.46274 13.0407 3.622C12.922 3.67908 12.8069 3.74607 12.6967 3.82297C12.6542 3.85259 12.5995 3.85934 12.5517 3.83951C12.5039 3.8197 12.47 3.77627 12.4609 3.72534C12.4374 3.59299 12.4034 3.46424 12.3598 3.33998C12.2383 2.99325 12.0426 2.68143 11.7916 2.42358C11.7915 2.4234 11.7918 2.42375 11.7916 2.42358C11.3375 1.95719 10.7022 1.66699 9.99984 1.66699C9.29744 1.66699 8.66271 1.95666 8.20857 2.42305C8.2084 2.42322 8.20874 2.42287 8.20857 2.42305C7.95763 2.6809 7.76137 2.99325 7.63987 3.33998C7.59632 3.46424 7.56232 3.59299 7.53873 3.72534C7.52965 3.77626 7.49574 3.8197 7.44796 3.83951C7.40014 3.85934 7.34548 3.85259 7.30302 3.82297C7.19275 3.74607 7.07767 3.67908 6.95902 3.622C6.62793 3.46274 6.26902 3.38066 5.90925 3.37577C5.909 3.37577 5.90949 3.37577 5.90925 3.37577C5.25833 3.36711 4.60395 3.6111 4.10728 4.10777C3.61061 4.60444 3.36661 5.25809 3.37527 5.909C3.37528 5.90925 3.37527 5.90876 3.37527 5.909C3.38016 6.26877 3.46225 6.62841 3.62151 6.9595C3.67859 7.07816 3.74558 7.19324 3.82248 7.3035C3.8521 7.34597 3.85886 7.40062 3.83902 7.44845C3.81921 7.49623 3.77578 7.53014 3.72485 7.53922C3.59249 7.56281 3.46375 7.59682 3.33948 7.64036C2.99276 7.76186 2.68094 7.95761 2.42309 8.20854C2.42291 8.20871 2.42326 8.20837 2.42309 8.20854C1.9567 8.66268 1.6665 9.29793 1.6665 10.0003C1.6665 10.7027 1.95617 11.3375 2.42256 11.7916C2.42274 11.7918 2.42239 11.7914 2.42256 11.7916C2.68041 12.0425 2.99276 12.2388 3.33948 12.3603C3.46374 12.4038 3.59249 12.4378 3.72485 12.4614C3.77578 12.4705 3.81921 12.5044 3.83902 12.5522C3.85886 12.6 3.8521 12.6547 3.82248 12.6971C3.74558 12.8074 3.67859 12.9225 3.62151 13.0412C3.46225 13.3722 3.38017 13.7312 3.37528 14.0909C3.37528 14.0912 3.37529 14.0907 3.37528 14.0909C3.36662 14.7418 3.61061 15.3962 4.10728 15.8929C4.60395 16.3896 5.2576 16.6336 5.90852 16.6249C5.90876 16.6249 5.90827 16.6249 5.90852 16.6249C6.26828 16.62 6.62792 16.5379 6.959 16.3787C7.07766 16.3216 7.19274 16.2546 7.30301 16.1777C7.34548 16.1481 7.40013 16.1413 7.44796 16.1611C7.49574 16.181 7.52965 16.2244 7.53873 16.2753C7.56232 16.4077 7.59633 16.5364 7.63988 16.6607C7.76137 17.0074 7.95712 17.3192 8.20805 17.5771C8.20822 17.5773 8.20788 17.5769 8.20805 17.5771C8.66219 18.0435 9.29744 18.3337 9.99984 18.3337C10.7022 18.3337 11.337 18.044 11.7911 17.5776C11.7913 17.5774 11.7909 17.5778 11.7911 17.5776C12.042 17.3198 12.2383 17.0074 12.3598 16.6607C12.4033 16.5364 12.4374 16.4077 12.4609 16.2753C12.47 16.2244 12.5039 16.181 12.5517 16.1611C12.5995 16.1413 12.6542 16.1481 12.6967 16.1777C12.8069 16.2546 12.922 16.3216 13.0407 16.3787C13.3718 16.5379 13.7307 16.62 14.0904 16.6249C14.0907 16.6249 14.0902 16.6249 14.0904 16.6249C14.7413 16.6335 15.3957 16.3896 15.8924 15.8929C16.3891 15.3962 16.6331 14.7426 16.6244 14.0916C16.6244 14.0914 16.6244 14.0919 16.6244 14.0916C16.6195 13.7319 16.5374 13.3722 16.3782 13.0412C16.3211 12.9225 16.2541 12.8074 16.1772 12.6971C16.1476 12.6547 16.1408 12.6 16.1607 12.5522C16.1805 12.5044 16.2239 12.4705 16.2748 12.4614C16.4072 12.4378 16.5359 12.4038 16.6602 12.3603C17.0069 12.2388 17.3187 12.043 17.5766 11.7921C17.5768 11.7919 17.5764 11.7923 17.5766 11.7921C18.043 11.338 18.3332 10.7027 18.3332 10.0003C18.3332 9.29793 18.0435 8.6632 17.5771 8.20905C17.5769 8.20888 17.5773 8.20922 17.5771 8.20905C17.3193 7.95812 17.0069 7.76186 16.6602 7.64036C16.5359 7.59682 16.4072 7.56281 16.2748 7.53922C16.2239 7.53014 16.1805 7.49623 16.1607 7.44845C16.1408 7.40062 16.1476 7.34597 16.1772 7.3035C16.2541 7.19323 16.3211 7.07815 16.3782 6.95949C16.5374 6.62841 16.6195 6.26876 16.6244 5.909C16.6244 5.90925 16.6244 5.90876 16.6244 5.909ZM14.7139 5.28628C14.4252 4.9976 13.9741 4.96402 13.6501 5.19001C13.1585 5.53286 12.5056 5.62468 11.9133 5.37906C11.3225 5.13408 10.9254 4.60853 10.8201 4.01781C10.7508 3.6289 10.4081 3.33366 9.99984 3.33366C9.59158 3.33366 9.24885 3.6289 9.17953 4.01781C9.07423 4.60852 8.67715 5.13408 8.08637 5.37906C7.49407 5.62467 6.8412 5.53286 6.34961 5.19C6.02559 4.96402 5.57447 4.9976 5.28579 5.28628C4.99711 5.57496 4.96354 6.02607 5.18952 6.35009C5.53237 6.8417 5.62418 7.49456 5.37857 8.08686C5.13359 8.67763 4.60804 9.07472 4.01732 9.18002C3.62841 9.24934 3.33317 9.59207 3.33317 10.0003C3.33317 10.4086 3.62841 10.7513 4.01732 10.8206C4.60804 10.9259 5.13359 11.323 5.37857 11.9138C5.62419 12.5061 5.53237 13.159 5.18952 13.6506C4.96354 13.9746 4.99711 14.4257 5.28579 14.7144C5.57448 15.0031 6.02558 15.0366 6.3496 14.8106C6.8412 14.4678 7.49406 14.376 8.08637 14.6216C8.67714 14.8666 9.07424 15.3921 9.17953 15.9828C9.24886 16.3717 9.59158 16.667 9.99984 16.667C10.4081 16.667 10.7508 16.3717 10.8201 15.9828C10.9254 15.3921 11.3225 14.8666 11.9133 14.6216C12.5056 14.376 13.1585 14.4678 13.6501 14.8106C13.9741 15.0366 14.4252 15.0031 14.7139 14.7144C15.0026 14.4257 15.0361 13.9746 14.8102 13.6506C14.4673 13.159 14.3755 12.5061 14.6211 11.9138C14.8661 11.323 15.3916 10.9259 15.9824 10.8206C16.3713 10.7513 16.6665 10.4086 16.6665 10.0003C16.6665 9.59207 16.3713 9.24934 15.9824 9.18002C15.3916 9.07472 14.8661 8.67763 14.6211 8.08686C14.3755 7.49455 14.4673 6.84169 14.8102 6.35009C15.0361 6.02607 15.0026 5.57496 14.7139 5.28628Z" fill="#72767C"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 11.667C10.9203 11.667 11.6665 10.9208 11.6665 10.0003C11.6665 9.07985 10.9203 8.33366 9.99984 8.33366C9.07936 8.33366 8.33317 9.07985 8.33317 10.0003C8.33317 10.9208 9.07936 11.667 9.99984 11.667ZM9.99984 13.3337C11.8408 13.3337 13.3332 11.8413 13.3332 10.0003C13.3332 8.15938 11.8408 6.66699 9.99984 6.66699C8.15889 6.66699 6.6665 8.15938 6.6665 10.0003C6.6665 11.8413 8.15889 13.3337 9.99984 13.3337Z" fill="#72767C"/>
  </svg>
  const logout = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19107 12.5003C9.65098 12.4829 10.0379 12.8417 10.0552 13.3016C10.0944 14.3384 10.1494 15.0951 10.2034 15.6377C10.2566 16.172 10.5792 16.4935 11.0289 16.5485C11.5591 16.6133 12.307 16.6663 13.3334 16.6663C14.3598 16.6663 15.1078 16.6133 15.638 16.5485C16.0874 16.4935 16.4101 16.1719 16.4634 15.6374C16.5637 14.6303 16.6667 12.8904 16.6667 9.99967C16.6667 7.10899 16.5637 5.36902 16.4634 4.3619C16.4101 3.82745 16.0874 3.50581 15.638 3.45087C15.1078 3.38605 14.3598 3.33301 13.3334 3.33301C12.307 3.33301 11.5591 3.38605 11.0289 3.45086C10.5792 3.50583 10.2566 3.82732 10.2034 4.36165C10.1494 4.90422 10.0944 5.66095 10.0552 6.69778C10.0379 7.15769 9.65098 7.51644 9.19107 7.49908C8.73116 7.48172 8.3724 7.09481 8.38976 6.6349C8.42994 5.57071 8.4869 4.7792 8.54495 4.19643C8.667 2.9713 9.52117 1.95609 10.8266 1.79651C11.4343 1.72223 12.2507 1.66634 13.3334 1.66634C14.4161 1.66634 15.2325 1.72223 15.8402 1.79652C17.1458 1.95612 17.9998 2.9718 18.1218 4.1967C18.2293 5.27524 18.3334 7.0734 18.3334 9.99967C18.3334 12.9259 18.2293 14.7241 18.1218 15.8027C17.9998 17.0275 17.1458 18.0432 15.8402 18.2028C15.2325 18.2771 14.4161 18.333 13.3334 18.333C12.2507 18.333 11.4343 18.2771 10.8266 18.2028C9.52117 18.0433 8.667 17.0281 8.54495 15.8029C8.4869 15.2201 8.42994 14.4286 8.38976 13.3644C8.3724 12.9045 8.73116 12.5176 9.19107 12.5003Z" fill="#72767C"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00576 12.3274C6.3312 12.6528 6.3312 13.1805 6.00576 13.5059C5.68032 13.8314 5.15269 13.8314 4.82725 13.5059L1.91058 10.5893C1.58514 10.2638 1.58514 9.73618 1.91058 9.41074L4.82725 6.49408C5.15269 6.16864 5.68032 6.16864 6.00576 6.49408C6.3312 6.81951 6.3312 7.34715 6.00576 7.67259L4.51168 9.16667H12.4998C12.9601 9.16667 13.3332 9.53976 13.3332 10C13.3332 10.4602 12.9601 10.8333 12.4998 10.8333L4.51168 10.8333L6.00576 12.3274Z" fill="#72767C"/>
  </svg>
  
  return (
   <div className='layout-wrapper'>
   <div className='nav'>
    <div className='searchbar'>
    <p className='lens'>{lens}</p>
    <input placeholder='Search or type'></input>
    </div>
    <div className='profile'>
        <p>{pell}</p>
        <img src={person}/>
    </div>
   </div>
   <div className='sidebar'>
      <h1>{logo}</h1>
      <div className='menu-items'>
      <div className='active'>{dashboard}<h2 > Dashboard</h2></div>
      <div>{car}<h2> Cars</h2></div>
      </div>
      <div className='sidebar-footer'>
        <div>{sittings}<h2> Settings</h2></div>
        <div>{logout}<h2> Log out</h2></div>
      </div>
   </div>
   
   </div>
  );
}

export default Layout;
