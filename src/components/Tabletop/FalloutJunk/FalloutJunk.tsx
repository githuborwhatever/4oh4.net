import {useState} from 'react';
import ScrapResult from '../../../models/ScrapResult';

function FalloutJunk() {
    const [scraps, setScraps] = useState(0);
    const [perkLevel, setPerkLevel] = useState(0);
    const [totalRare, setTotalRare] = useState(0);
    const [totalUncommon, setTotalUncommon] = useState(0);
    const [totalCommon, setTotalCommon] = useState(0);
    const [skillValue, setSkillValue] = useState(0);
    const [attributeValue, setAttributeValue] = useState(0);
    const [actionPoints, setActionPoints] = useState(0);
    const [complications, setComplications] = useState(0);

  return (
    <>
        <h3>fallout junking</h3>

        <div>
            <div>
                <label>
                    number of scrap
                    <input type="number" min="1" max="999" value={scraps} onChange={handleScrapChange}></input>
                </label>
            </div>

            <div>
                <label>
                    scrapper perk level
                    <input type="number" min="0" max="2" value={perkLevel} onChange={handlePerkLevelChange}></input>
                </label>
            </div>

            <div>
                <label>
                    attribute value
                    <input type="number" min="1" max="999" value={attributeValue} onChange={handleAttributeValueChange}></input>
                </label>
            </div>

            <div>
                <label>
                    skill value
                    <input type="number" min="1" max="999" value={skillValue} onChange={handleSkillValueChange}></input>
                </label>
            </div>

            <div>
                results
                <div>common: {totalCommon}</div>
                <div>uncommon: {totalUncommon}</div>
                <div>rare: {totalRare}</div>
                <div>extra action points: {actionPoints}</div>
                <div>complications: {complications}</div>
            </div>

            <div>
                <button onClick={scrap}>Rollies</button>
            </div>
        </div>
    </>
  );

  function scrap() {
    const scrapResult = new ScrapResult(scraps, perkLevel, attributeValue, skillValue);

    setTotalRare(scrapResult.rare);
    setTotalUncommon(scrapResult.uncommon);
    setTotalCommon(scrapResult.common);
    setActionPoints(scrapResult.actionPoints);
    setComplications(scrapResult.complications);
  }

  function handlePerkLevelChange(e : React.ChangeEvent<HTMLInputElement>) {
    handleNumericInputChange(e, setPerkLevel, 0, 2);
  }

  function handleScrapChange(e : React.ChangeEvent<HTMLInputElement>) {
    handleNumericInputChange(e, setScraps, 1, 999);
  }

  function handleSkillValueChange(e : React.ChangeEvent<HTMLInputElement>) {
    handleNumericInputChange(e, setSkillValue, 1, 999);
  }

  function handleAttributeValueChange(e : React.ChangeEvent<HTMLInputElement>) {
    handleNumericInputChange(e, setAttributeValue, 1, 999);
  }

  function handleNumericInputChange(e: React.ChangeEvent<HTMLInputElement>, callback: Function, min: number, max: number) {
    const val = parseInt(e.target.value);
    
    if (isNaN(val) || val < min || val > max) {
        return;
    }
    
    callback(val);
  }
}

export default FalloutJunk;
