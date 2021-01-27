import './_logo.scss';
import React from 'react';
import {Link} from 'react-router-dom';


const Logo = () => {
    return (
        // <svg width="187" height="33" viewBox="0 0 187 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M5.19682 6.48682L11.6557 32.9999H0L5.19682 6.48682Z" fill="#065B8B"/>
        //     <path d="M27.6365 32.9998H14.5053L6.46875 0H19.6L27.6365 32.9998Z" fill="#2EA0D3"/>
        //     <path d="M43.8675 32.9998H30.4764L22.4492 0H35.8217L43.8675 32.9998Z" fill="#99D3EB"/>
        //     <path d="M50.3344 0L45.1283 26.5223L38.6602 0H50.3344Z" fill="#EE782D"/>
        //     <path d="M58.7162 13.0196L58.7626 14.9127C59.1895 14.2074 59.7277 13.6878 60.3773 13.3351C61.0176 12.9825 61.7415 12.8062 62.5303 12.8062C64.3677 12.8062 65.5277 13.5578 66.0196 15.0612C66.4372 14.3374 66.994 13.7806 67.6807 13.4001C68.3767 13.0103 69.1377 12.8062 69.9821 12.8062C72.4785 12.8062 73.7498 14.1703 73.7962 16.8894V24.6475H72.5063V16.9822C72.497 15.9428 72.2743 15.1726 71.8289 14.6714C71.3927 14.1703 70.6781 13.9198 69.6759 13.9198C68.7479 13.9383 67.9684 14.2353 67.3373 14.8199C66.697 15.4046 66.3444 16.1098 66.2701 16.945V24.6382H64.9802V16.8801C64.9709 15.8871 64.7389 15.1447 64.2749 14.6529C63.8109 14.161 63.1056 13.9198 62.1405 13.9198C61.3331 13.9198 60.6371 14.1518 60.0525 14.6158C59.4679 15.0705 59.041 15.7572 58.7626 16.6666V24.6382H57.4727V13.0196H58.7162Z" fill="#010202"/>
        //     <path d="M76.5327 18.6526C76.5327 17.539 76.7462 16.5274 77.173 15.6366C77.6092 14.7457 78.2217 14.0497 79.0105 13.5486C79.8086 13.0474 80.7087 12.7969 81.711 12.7969C83.2607 12.7969 84.5135 13.3444 85.4694 14.4302C86.4252 15.5159 86.9078 16.945 86.9078 18.7361V19.0052C86.9078 20.1281 86.6851 21.1396 86.2489 22.0491C85.822 22.9492 85.2095 23.6359 84.4207 24.1185C83.6319 24.6104 82.7318 24.8516 81.7203 24.8516C80.1798 24.8516 78.927 24.3134 77.9618 23.2276C77.006 22.1419 76.5234 20.6942 76.5234 18.9031V18.6526H76.5327ZM77.8226 19.0145C77.8226 20.4065 78.1846 21.5479 78.8991 22.4388C79.623 23.3297 80.5695 23.7751 81.7388 23.7751C82.8988 23.7751 83.8361 23.3297 84.5507 22.4388C85.2745 21.5387 85.6364 20.3694 85.6364 18.9031V18.6526C85.6364 17.7617 85.4694 16.9543 85.1446 16.2119C84.8105 15.4695 84.3558 14.9034 83.7619 14.5044C83.1679 14.0961 82.4905 13.8919 81.7203 13.8919C80.5695 13.8919 79.6415 14.3466 78.9177 15.2468C78.1938 16.1377 77.8319 17.3162 77.8319 18.7732V19.0145H77.8226Z" fill="#010202"/>
        //     <path d="M96.7249 21.6871C96.7249 21.0468 96.465 20.5364 95.9546 20.1467C95.4442 19.7569 94.674 19.4599 93.6439 19.2465C92.6138 19.0238 91.8064 18.7732 91.2404 18.4948C90.6743 18.2071 90.2474 17.8638 89.969 17.4554C89.6999 17.0471 89.5607 16.5553 89.5607 15.9706C89.5607 15.0519 89.9411 14.3002 90.7114 13.7063C91.4816 13.1031 92.456 12.8062 93.6532 12.8062C94.9524 12.8062 95.9917 13.131 96.7712 13.7713C97.56 14.4116 97.9498 15.2468 97.9498 16.2769H96.6599C96.6599 15.5994 96.3722 15.0334 95.7968 14.5786C95.2308 14.1239 94.5162 13.9012 93.6439 13.9012C92.7994 13.9012 92.122 14.0868 91.6023 14.4673C91.0919 14.8385 90.8413 15.3303 90.8413 15.9242C90.8413 16.5089 91.0547 16.9543 91.4724 17.2791C91.8992 17.5946 92.6788 17.8823 93.8016 18.1514C94.9338 18.4206 95.7783 18.699 96.3351 18.9959C96.9012 19.2929 97.3188 19.6548 97.5879 20.0817C97.857 20.5086 97.9962 21.019 97.9962 21.6222C97.9962 22.6059 97.5972 23.3854 96.7991 23.9793C96.0103 24.5639 94.9802 24.8609 93.7088 24.8609C92.354 24.8609 91.2589 24.5361 90.4051 23.8865C89.5699 23.2276 89.1523 22.3924 89.1523 21.3902H90.4423C90.4887 22.1419 90.8042 22.7265 91.3888 23.1534C91.9735 23.571 92.753 23.7751 93.7088 23.7751C94.5997 23.7751 95.3236 23.5803 95.8804 23.1812C96.4464 22.7822 96.7249 22.2903 96.7249 21.6871Z" fill="#010202"/>
        //     <path d="M102.277 13.0196L102.324 14.9127C102.75 14.2074 103.289 13.6878 103.938 13.3351C104.579 12.9825 105.303 12.8062 106.091 12.8062C107.929 12.8062 109.089 13.5578 109.581 15.0612C109.998 14.3374 110.555 13.7806 111.242 13.4001C111.938 13.0103 112.699 12.8062 113.543 12.8062C116.039 12.8062 117.311 14.1703 117.357 16.8894V24.6475H116.067V16.9822C116.058 15.9428 115.835 15.1726 115.39 14.6714C114.954 14.1703 114.239 13.9198 113.237 13.9198C112.309 13.9383 111.529 14.2353 110.898 14.8199C110.258 15.4046 109.905 16.1098 109.831 16.945V24.6382H108.541V16.8801C108.532 15.8871 108.3 15.1447 107.836 14.6529C107.381 14.161 106.667 13.9105 105.711 13.9105C104.903 13.9105 104.207 14.1425 103.623 14.6065C103.038 15.0612 102.611 15.7479 102.333 16.6574V24.6289H101.043V13.0196H102.277Z" fill="#010202"/>
        //     <path d="M125.3 24.8609C124.307 24.8609 123.416 24.6196 122.618 24.1278C121.82 23.6452 121.207 22.9678 120.762 22.0955C120.316 21.2231 120.094 20.2395 120.094 19.163V18.699C120.094 17.5854 120.307 16.5738 120.734 15.683C121.17 14.7921 121.773 14.0868 122.553 13.5764C123.323 13.0567 124.168 12.8062 125.068 12.8062C126.478 12.8062 127.601 13.2887 128.418 14.2538C129.253 15.2097 129.661 16.5274 129.661 18.1978V18.9217H121.365V19.1723C121.365 20.49 121.746 21.5943 122.497 22.4667C123.258 23.339 124.205 23.7751 125.356 23.7751C126.042 23.7751 126.645 23.6452 127.174 23.3947C127.703 23.1441 128.186 22.7451 128.613 22.1883L129.42 22.8007C128.474 24.1742 127.1 24.8609 125.3 24.8609ZM125.068 13.8919C124.103 13.8919 123.286 14.2446 122.618 14.9591C121.959 15.6644 121.56 16.6202 121.412 17.8174H128.39V17.6782C128.353 16.5646 128.037 15.6551 127.434 14.9498C126.831 14.2446 126.042 13.8919 125.068 13.8919Z" fill="#010202"/>
        //     <path d="M134.346 10.0405V13.0194H136.75V14.0681H134.346V21.8169C134.346 22.4572 134.458 22.9398 134.69 23.2553C134.922 23.5708 135.321 23.7286 135.859 23.7286C136.072 23.7286 136.425 23.6915 136.898 23.6172L136.954 24.6659C136.62 24.7865 136.156 24.8515 135.58 24.8515C134.699 24.8515 134.059 24.6009 133.659 24.0905C133.26 23.5708 133.056 22.8191 133.056 21.8262V14.0681H130.922V13.0194H133.056V10.0405H134.346Z" fill="#010202"/>
        //     <path d="M138.681 18.6526C138.681 17.539 138.895 16.5274 139.321 15.6366C139.758 14.7457 140.37 14.0497 141.159 13.5486C141.957 13.0474 142.857 12.7969 143.859 12.7969C145.409 12.7969 146.662 13.3444 147.618 14.4302C148.574 15.5159 149.056 16.945 149.056 18.7361V19.0052C149.056 20.1281 148.834 21.1396 148.397 22.0491C147.97 22.9492 147.358 23.6359 146.569 24.1185C145.78 24.6104 144.88 24.8516 143.869 24.8516C142.328 24.8516 141.075 24.3134 140.11 23.2276C139.154 22.1419 138.672 20.6942 138.672 18.9031V18.6526H138.681ZM139.971 19.0145C139.971 20.4065 140.333 21.5479 141.048 22.4388C141.771 23.3297 142.718 23.7751 143.887 23.7751C145.047 23.7751 145.985 23.3297 146.699 22.4388C147.423 21.5387 147.785 20.3694 147.785 18.9031V18.6526C147.785 17.7617 147.618 16.9543 147.293 16.2119C146.959 15.4695 146.504 14.9034 145.91 14.5044C145.316 14.0961 144.639 13.8919 143.869 13.8919C142.718 13.8919 141.79 14.3466 141.066 15.2468C140.342 16.1377 139.98 17.3162 139.98 18.7732V19.0145H139.971Z" fill="#010202"/>
        //     <path d="M151.398 18.7174C151.398 16.9078 151.797 15.4787 152.605 14.4115C153.412 13.335 154.507 12.7968 155.89 12.7968C157.458 12.7968 158.655 13.4185 159.481 14.6528V8.13818H160.762V24.6474H159.556L159.5 23.0976C158.674 24.2762 157.468 24.8608 155.871 24.8608C154.535 24.8608 153.449 24.3226 152.623 23.2461C151.807 22.1603 151.398 20.7033 151.398 18.8752V18.7174ZM152.698 18.9494C152.698 20.4342 152.995 21.6035 153.589 22.4665C154.182 23.3203 155.018 23.7472 156.103 23.7472C157.69 23.7472 158.813 23.0512 159.481 21.6499V16.1932C158.813 14.6806 157.7 13.9289 156.131 13.9289C155.045 13.9289 154.21 14.3558 153.607 15.2096C152.995 16.0448 152.698 17.2883 152.698 18.9494Z" fill="#010202"/>
        //     <path d="M164.203 23.8674C164.203 23.6169 164.287 23.4034 164.435 23.2364C164.602 23.0601 164.825 22.9673 165.113 22.9673C165.4 22.9673 165.623 23.0601 165.79 23.2364C165.957 23.4127 166.041 23.6169 166.041 23.8674C166.041 24.118 165.957 24.3222 165.79 24.4892C165.623 24.647 165.4 24.7212 165.113 24.7212C164.825 24.7212 164.602 24.6377 164.435 24.4892C164.287 24.3222 164.203 24.118 164.203 23.8674Z" fill="#010202"/>
        //     <path d="M175.147 14.1146C174.877 14.0682 174.58 14.0404 174.274 14.0404C173.476 14.0404 172.789 14.2631 172.233 14.7178C171.685 15.1633 171.286 15.8129 171.054 16.6666V24.6475H169.773V13.0196H171.026L171.045 14.8663C171.722 13.4929 172.817 12.8062 174.321 12.8062C174.683 12.8062 174.961 12.8526 175.174 12.9454L175.147 14.1146Z" fill="#010202"/>
        //     <path d="M184.852 23.1719C184.082 24.2948 182.838 24.8609 181.14 24.8609C179.896 24.8609 178.959 24.4989 178.309 23.7844C177.669 23.0605 177.335 21.9933 177.316 20.5828V13.0195H178.597V20.4157C178.597 22.6336 179.488 23.738 181.279 23.738C183.144 23.738 184.323 22.9677 184.815 21.4272V13.0103H186.105V24.6381H184.861L184.852 23.1719Z" fill="#010202"/>
        // </svg>
        <svg height="80%" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.19682 8.48682L12.6557 34.9999H1L6.19682 8.48682Z" fill="#61B3E3"/>
            <path d="M28.6365 34.9998H15.5053L7.46875 2H20.6L28.6365 34.9998Z" fill="#488CBE"/>
            <path d="M44.8675 34.9998H31.4764L23.4492 2H36.8217L44.8675 34.9998Z" fill="#3C5D69"/>
            <path d="M51.3344 2L46.1283 28.5223L39.6602 2H51.3344Z" fill="#D75A11"/>
        </svg>
    );
}

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    pageScrollToTop = () => {
        window.scroll(0,0);
    };

    render() {

    const {title, description} = this.props;

        return (
            <Link
                className="logo"
                to="/"
                onClick={this.pageScrollToTop}
            >
                <Logo />
                {/*{title && <div className="logo-title">{title}</div>}*/}
                {description && <div className="logo-description">{description}</div>}
            </Link>
        )
    }
}