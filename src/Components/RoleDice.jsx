import styled from "styled-components";

const RoleDice = ({roleDice,currentDice}) => {
    

    return(
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice_1" />
            </div>
            <p>Click On Dice To Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice{
    cursor: pointer;
  }
  p{
    font-size: 18px;
    font-weight: 900;
  }
`;