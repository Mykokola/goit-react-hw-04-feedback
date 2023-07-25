import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle} from './Section.styled'

export const Section = ({title,child}) => {
    return (
        <SectionContainer> 
        <SectionTitle>{title}</SectionTitle>
        {child}
        </SectionContainer>

    )
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    child: PropTypes.node,
  };