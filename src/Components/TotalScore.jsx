import styled from "styled-components";

const TotalScore = ({score}) => {
    return(
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
        
    );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1{
    font-size: 70px;
    line-height: 80px;
  }
  p{
    font-weight: 800;
    font-size: 24px;
    font-weight: 500px;
  }
`;