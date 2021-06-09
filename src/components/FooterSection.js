import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import Button from "./Button";
import logo from "../assets/icons/logo.svg";

const StyledFooterSection = styled.footer`
  background-color: #f8f8f8;
  padding: 5rem var(--side-padding);
`;

const SubscribeCard = styled.div`
  bckground-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 20px 114px rgba(13, 16, 37, 0.06);
  margin-top: -16%;
  padding: 3.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    flex: 0 0 40%;
  }
  & p {
    margin-top: 1.25rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    & {
      flex-flow: row wrap;
      padding: 3.5rem 2rem;
      text-align: center;
    }
    & div {
      flex: 100%;
      margin-bottom: 3rem;
    }
    & a {
      margin: 0 auto;
    }
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    & {
      padding: 3.5rem 2rem;
    }
    & div {
      flex: 0 0 55%;
    }
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lg_end}) {
    & div {
      flex: 0 0 60%;
    }
  }
`;

const FooterGroupBox = styled.div`
  display: flex;
  padding-top: 4rem;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex-wrap: wrap;
    }
  }
`;

const LogoAndSocialMediaLinksBox = styled.div`
  flex: 0 0 30%;
  margin-right: auto;

  & .companyDescription {
    margin: 1rem 0 1.875rem;

    & span {
      font-weight: 500;
    }
  }

  & .copyright {
    color: #afb5c0;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex: 0 0 100%;
      order: 5;
      margin-top: 2rem;
    }
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex: 0 0 60%;
    }
  }
`;

const SocialMediaLinksGroup = styled.div`
  display: inline-flex;
  margin-bottom: 6rem;

  & div {
    width: 33px;
    height: 33px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--orange);
    transition: 0.3s;
    cursor: pointer;
    overflow: hidden;

    & svg {
      transform: scale(1.1);
    }
    &:hover {
      background-color: #ffffff;

      & path {
        fill: var(--orange);
        transition: 0.3s;
      }
    }
  }
  & div:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const SingleFooterQuickLinksContainer = styled.div`
  flex: 0 0 18%;

  & h4 {
    margin-bottom: 1.75rem;
  }

  & div {
    margin-top: 0.75rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 0 0 50%;
    margin-bottom: 3.5rem;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 33%;
    margin-bottom: 3.5rem;
  }
`;

export default function FooterSection() {
  return (
    <StyledFooterSection>
      <SubscribeCard>
        <div>
          <h2>Subscribe Now to Get Special Features</h2>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <Button primary>Subscribe Now</Button>
      </SubscribeCard>
      <FooterGroupBox>
        <LogoAndSocialMediaLinksBox>
          <img src={logo} alt="LaslesVPN logo" />
          <p className="companyDescription">
            <span>LaslesVPN</span> is a virtual private network that has unique
            features and has high security.
          </p>
          <SocialMediaLinksGroup>
            <div>
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8 0.580566C7.5215 0.580566 0 8.10207 0 17.3806C0 26.6591 7.5215 34.1806 16.8 34.1806C26.0785 34.1806 33.6 26.6591 33.6 17.3806C33.6 8.10207 26.0785 0.580566 16.8 0.580566ZM20.7795 12.1901H18.2543C17.955 12.1901 17.6225 12.5838 17.6225 13.1071V14.9306H20.7813L20.3035 17.5311H17.6225V25.3378H14.6423V17.5311H11.9385V14.9306H14.6423V13.4011C14.6423 11.2066 16.1648 9.42332 18.2543 9.42332H20.7795V12.1901Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4 0.580566C8.12148 0.580566 0.599976 8.10207 0.599976 17.3806C0.599976 26.6591 8.12148 34.1806 17.4 34.1806C26.6785 34.1806 34.2 26.6591 34.2 17.3806C34.2 8.10207 26.6785 0.580566 17.4 0.580566ZM24.2337 14.3426C24.2407 14.4861 24.2425 14.6296 24.2425 14.7696C24.2425 19.1446 20.9157 24.1863 14.8292 24.1863C13.0307 24.1893 11.2697 23.6728 9.75773 22.6988C10.015 22.7303 10.2792 22.7426 10.547 22.7426C12.0975 22.7426 13.5237 22.2158 14.656 21.3268C13.966 21.3133 13.2974 21.0848 12.7434 20.6732C12.1894 20.2617 11.7777 19.6875 11.5655 19.0308C12.061 19.125 12.5715 19.1053 13.0582 18.9731C12.3093 18.8216 11.6358 18.4158 11.152 17.8245C10.6681 17.2331 10.4037 16.4926 10.4035 15.7286V15.6883C10.8497 15.9351 11.3607 16.0856 11.9032 16.1031C11.2011 15.6357 10.7041 14.9177 10.5138 14.0961C10.3235 13.2744 10.4543 12.411 10.8795 11.6826C11.7106 12.7046 12.7472 13.5406 13.922 14.1366C15.0968 14.7326 16.3836 15.0752 17.6992 15.1423C17.532 14.4324 17.604 13.687 17.904 13.0222C18.204 12.3574 18.7153 11.8103 19.3584 11.466C20.0014 11.1218 20.7402 10.9996 21.4598 11.1185C22.1794 11.2374 22.8396 11.5907 23.3377 12.1236C24.0783 11.9771 24.7884 11.7054 25.4377 11.3203C25.1909 12.0871 24.6742 12.7381 23.9835 13.1526C24.6395 13.0736 25.28 12.8972 25.884 12.6293C25.4403 13.2941 24.8815 13.8743 24.2337 14.3426Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.25 17.3806C22.25 18.773 21.6968 20.1083 20.7123 21.0929C19.7277 22.0774 18.3923 22.6306 17 22.6306C15.6076 22.6306 14.2722 22.0774 13.2876 21.0929C12.3031 20.1083 11.75 18.773 11.75 17.3806C11.75 17.0813 11.7815 16.7891 11.8357 16.5056H9.99995V23.5003C9.99995 23.9868 10.3937 24.3806 10.8802 24.3806H23.1215C23.3546 24.3801 23.5781 24.2872 23.7428 24.1221C23.9075 23.9571 24 23.7335 24 23.5003V16.5056H22.1642C22.2185 16.7891 22.25 17.0813 22.25 17.3806ZM17 20.8806C17.4597 20.8805 17.9149 20.7898 18.3396 20.6137C18.7643 20.4377 19.1502 20.1797 19.4752 19.8546C19.8002 19.5294 20.058 19.1434 20.2338 18.7186C20.4096 18.2938 20.5001 17.8386 20.5 17.3788C20.4998 16.9191 20.4092 16.4639 20.2331 16.0392C20.0571 15.6145 19.7991 15.2286 19.474 14.9036C19.1488 14.5786 18.7628 14.3208 18.338 14.145C17.9132 13.9691 17.4579 13.8787 16.9982 13.8788C16.0697 13.8791 15.1793 14.2481 14.523 14.9048C13.8666 15.5615 13.498 16.4521 13.4982 17.3806C13.4984 18.3091 13.8675 19.1994 14.5242 19.8558C15.1809 20.5122 16.0715 20.8808 17 20.8806ZM21.2 13.7056H23.2982C23.4376 13.7056 23.5713 13.6503 23.6701 13.5519C23.7688 13.4535 23.8245 13.32 23.825 13.1806V11.0823C23.825 10.9426 23.7695 10.8086 23.6707 10.7098C23.5719 10.6111 23.4379 10.5556 23.2982 10.5556H21.2C21.0603 10.5556 20.9263 10.6111 20.8275 10.7098C20.7287 10.8086 20.6732 10.9426 20.6732 11.0823V13.1806C20.675 13.4693 20.9112 13.7056 21.2 13.7056ZM17 0.580566C12.5443 0.580566 8.27117 2.35056 5.12056 5.50117C1.96995 8.65178 0.199951 12.9249 0.199951 17.3806C0.199951 21.8362 1.96995 26.1094 5.12056 29.26C8.27117 32.4106 12.5443 34.1806 17 34.1806C19.2062 34.1806 21.3908 33.746 23.429 32.9017C25.4673 32.0575 27.3193 30.82 28.8794 29.26C30.4394 27.6999 31.6769 25.8479 32.5211 23.8097C33.3654 21.7714 33.8 19.5868 33.8 17.3806C33.8 15.1744 33.3654 12.9898 32.5211 10.9515C31.6769 8.91322 30.4394 7.0612 28.8794 5.50117C27.3193 3.94115 25.4673 2.70367 23.429 1.85939C21.3908 1.01511 19.2062 0.580566 17 0.580566ZM25.75 24.1863C25.75 25.2556 24.875 26.1306 23.8057 26.1306H10.1942C9.12495 26.1306 8.24995 25.2556 8.24995 24.1863V10.5748C8.24995 9.50557 9.12495 8.63057 10.1942 8.63057H23.8057C24.875 8.63057 25.75 9.50557 25.75 10.5748V24.1863Z"
                  fill="white"
                />
              </svg>
            </div>
          </SocialMediaLinksGroup>
          <p className="copyright">&copy; 2021. LaslesVPN</p>
        </LogoAndSocialMediaLinksBox>

        <SingleFooterQuickLinksContainer>
          <h4>Product</h4>
          <div>Download</div>
          <div>Pricing</div>
          <div>Locations</div>
          <div>Server</div>
          <div>Countries</div>
          <div>Blog</div>
        </SingleFooterQuickLinksContainer>

        <SingleFooterQuickLinksContainer>
          <h4>Engage</h4>
          <div>LaslesVPN</div>
          <div>FAQs</div>
          <div>Tutorials</div>
          <div>About Us</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </SingleFooterQuickLinksContainer>

        <SingleFooterQuickLinksContainer>
          <h4>Earn Money</h4>
          <div>Affiliate</div>
          <div>Become Partner</div>
        </SingleFooterQuickLinksContainer>
      </FooterGroupBox>
    </StyledFooterSection>
  );
}
