import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import hugeGlobalMap from "../assets/images/huge_global_map.png";

const StyledGlobalNetworkSection = styled.section`
  padding: 5rem var(--side-padding);
  background-color: #f6f6f6;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    padding: 5rem 0;
  }
`;

const SectionHeadingBox = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  & p {
    margin: 1.25rem 0 5.5rem;
  }
  & p span {
    font-weight: 500;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    padding: 0 var(--side-padding);
  }
`;

export default function GlobalNetworkSection() {
  return (
    <StyledGlobalNetworkSection>
      <SectionHeadingBox>
        <h2>Huge Global Network of Fast VPN</h2>
        <p>
          See <span>LaslesVPN</span> everywhere to make it easier for you when
          you move locations.
        </p>
      </SectionHeadingBox>
      <img
        src={hugeGlobalMap}
        alt="World map showing different locations of LaslesVPN servers"
      />
    </StyledGlobalNetworkSection>
  );
}
