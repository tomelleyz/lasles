import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import featuresIllustration from "../assets/images/features_illustration.png";

const StyledFeaturesSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5rem var(--side-padding);

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    > * {
      &:last-child {
        margin-top: 3rem;
      }
    }
  }
`;

const FeaturesSectionImageContainer = styled.div`
  flex: 0 0 50%;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 100%;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 40%;
  }
`;

const FeaturesSectionTextContainer = styled.div`
  flex: 0 0 40%;

  & p {
    margin: 1.25rem 0;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 100%;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 55%;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 1rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export default function FeaturesSection() {
  return (
    <StyledFeaturesSection>
      <FeaturesSectionImageContainer>
        <img src={featuresIllustration} alt="" />
      </FeaturesSectionImageContainer>
      <FeaturesSectionTextContainer>
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div>
          <FeatureItem>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                fill="#2FAB73"
              />
            </svg>
            <span>Powerful online protection.</span>
          </FeatureItem>
          <FeatureItem>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                fill="#2FAB73"
              />
            </svg>
            <span>Internet without borders.</span>
          </FeatureItem>
          <FeatureItem>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                fill="#2FAB73"
              />
            </svg>
            <span>Supercharged VPN</span>
          </FeatureItem>
          <FeatureItem>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                fill="#2FAB73"
              />
            </svg>
            <span>No specific time limits.</span>
          </FeatureItem>
        </div>
      </FeaturesSectionTextContainer>
    </StyledFeaturesSection>
  );
}
