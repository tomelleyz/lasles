import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const StyledMetricsSection = styled.section`
  padding: 5rem var(--side-padding);
`;

const MetricsGroupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 2.25rem 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 20px 114px rgba(13, 16, 37, 0.06);

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    padding: 2.25rem 3rem;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.sm_end}) {
    padding: 2.25rem 6rem;
  }

  > * {
    &:not(:last-child) {
      border-right: 2px solid #eeeff2;
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
      &:not(:last-child) {
        border-right: none;
        border-bottom: 2px solid #eeeff2;
      }
    }
  }
`;

const SingleMetricBox = styled.div`
  flex: 33%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  > * {
    &:first-child {
      margin-right: 1rem;
    }
    &:last-child {
      margin-left: 1rem;
    }
    & span {
      display: block;
    }
    & .metricNumber {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--heading-text-color);
    }
    & .metricTitle {
      font-size: 1.25rem;
    }
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 100%;
    justify-content: flex-start;
  }
`;

export default function MetricsSection() {
  return (
    <StyledMetricsSection>
      <MetricsGroupContainer>
        <SingleMetricBox>
          <svg
            width="55"
            height="56"
            viewBox="0 0 55 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.0493164"
              width="55"
              height="55"
              rx="27.5"
              fill="#FFECEC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.5 26.3493C28.4548 26.3493 29.3705 25.97 30.0456 25.2949C30.7207 24.6197 31.1 23.7041 31.1 22.7493C31.1 21.7945 30.7207 20.8788 30.0456 20.2037C29.3705 19.5286 28.4548 19.1493 27.5 19.1493C26.5452 19.1493 25.6296 19.5286 24.9544 20.2037C24.2793 20.8788 23.9 21.7945 23.9 22.7493C23.9 23.7041 24.2793 24.6197 24.9544 25.2949C25.6296 25.97 26.5452 26.3493 27.5 26.3493ZM22.3987 37.1493C20.5769 37.1493 19.0422 35.6179 19.7394 33.9347C20.1616 32.9156 20.7803 31.9896 21.5603 31.2096C22.3403 30.4296 23.2663 29.8108 24.2855 29.3887C25.3046 28.9666 26.3969 28.7493 27.5 28.7493C28.6031 28.7493 29.6954 28.9666 30.7145 29.3887C31.7337 29.8108 32.6597 30.4296 33.4397 31.2096C34.2197 31.9896 34.8385 32.9156 35.2606 33.9347C35.9578 35.6179 34.4232 37.1493 32.6014 37.1493H22.3987Z"
              fill="#F53838"
            />
          </svg>
          <div>
            <span className="metricNumber">90+</span>
            <span className="metricTitle">Users</span>
          </div>
        </SingleMetricBox>
        <SingleMetricBox>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.0493164"
              width="55"
              height="55"
              rx="27.5"
              fill="#FFECEC"
            />
            <path
              d="M35 24.5493C35 23.6301 34.8189 22.7198 34.4672 21.8705C34.1154 21.0213 33.5998 20.2496 32.9497 19.5996C32.2997 18.9496 31.5281 18.4339 30.6788 18.0822C29.8295 17.7304 28.9193 17.5493 28 17.5493C27.0807 17.5493 26.1705 17.7304 25.3212 18.0822C24.4719 18.4339 23.7003 18.9496 23.0503 19.5996C22.4002 20.2496 21.8846 21.0213 21.5328 21.8705C21.1811 22.7198 21 23.6301 21 24.5493C21 25.9363 21.41 27.2263 22.105 28.3143H22.097C24.457 32.0093 28 37.5493 28 37.5493L33.903 28.3143H33.896C34.6164 27.1907 34.9995 25.8841 35 24.5493ZM28 27.5493C27.2044 27.5493 26.4413 27.2332 25.8787 26.6706C25.3161 26.108 25 25.345 25 24.5493C25 23.7537 25.3161 22.9906 25.8787 22.428C26.4413 21.8654 27.2044 21.5493 28 21.5493C28.7956 21.5493 29.5587 21.8654 30.1213 22.428C30.6839 22.9906 31 23.7537 31 24.5493C31 25.345 30.6839 26.108 30.1213 26.6706C29.5587 27.2332 28.7956 27.5493 28 27.5493Z"
              fill="#F53838"
            />
          </svg>

          <div>
            <span className="metricNumber">30+</span>
            <span className="metricTitle">Locations</span>
          </div>
        </SingleMetricBox>
        <SingleMetricBox>
          <svg
            width="55"
            height="56"
            viewBox="0 0 55 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.0493164"
              width="55"
              height="55"
              rx="27.5"
              fill="#FFECEC"
            />
            <path
              d="M35.5 18.5493H19.5C18.9696 18.5493 18.4609 18.76 18.0858 19.1351C17.7107 19.5102 17.5 20.0189 17.5 20.5493V24.5493C17.5 25.0797 17.7107 25.5885 18.0858 25.9635C18.4609 26.3386 18.9696 26.5493 19.5 26.5493H35.5C36.0304 26.5493 36.5391 26.3386 36.9142 25.9635C37.2893 25.5885 37.5 25.0797 37.5 24.5493V20.5493C37.5 20.0189 37.2893 19.5102 36.9142 19.1351C36.5391 18.76 36.0304 18.5493 35.5 18.5493ZM30.5 22.5493C30.5 23.1016 30.0523 23.5493 29.5 23.5493C28.9477 23.5493 28.5 23.1016 28.5 22.5493C28.5 21.997 28.9477 21.5493 29.5 21.5493C30.0523 21.5493 30.5 21.997 30.5 22.5493ZM34.5 22.5493C34.5 23.1016 34.0523 23.5493 33.5 23.5493C32.9477 23.5493 32.5 23.1016 32.5 22.5493C32.5 21.997 32.9477 21.5493 33.5 21.5493C34.0523 21.5493 34.5 21.997 34.5 22.5493ZM35.5 28.5493H19.5C18.9696 28.5493 18.4609 28.76 18.0858 29.1351C17.7107 29.5102 17.5 30.0189 17.5 30.5493V34.5493C17.5 35.0798 17.7107 35.5885 18.0858 35.9635C18.4609 36.3386 18.9696 36.5493 19.5 36.5493H35.5C36.0304 36.5493 36.5391 36.3386 36.9142 35.9635C37.2893 35.5885 37.5 35.0798 37.5 34.5493V30.5493C37.5 30.0189 37.2893 29.5102 36.9142 29.1351C36.5391 28.76 36.0304 28.5493 35.5 28.5493ZM30.5 32.5493C30.5 33.1016 30.0523 33.5493 29.5 33.5493C28.9477 33.5493 28.5 33.1016 28.5 32.5493C28.5 31.997 28.9477 31.5493 29.5 31.5493C30.0523 31.5493 30.5 31.997 30.5 32.5493ZM34.5 32.5493C34.5 33.1016 34.0523 33.5493 33.5 33.5493C32.9477 33.5493 32.5 33.1016 32.5 32.5493C32.5 31.997 32.9477 31.5493 33.5 31.5493C34.0523 31.5493 34.5 31.997 34.5 32.5493Z"
              fill="#F53838"
            />
          </svg>

          <div>
            <span className="metricNumber">50+</span>
            <span className="metricTitle">Servers</span>
          </div>
        </SingleMetricBox>
      </MetricsGroupContainer>
    </StyledMetricsSection>
  );
}
