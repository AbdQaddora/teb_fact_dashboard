import React, { useEffect, useState } from 'react'
import { DateRange, DateRangePicker } from 'react-date-range';
import Button from '../../../../../components/tiny/Button';
import { dateToString } from '../../../../../util';
import Modal from '../../../../../components/Modal';
import Style from './style';

interface IProps {
    setStartDate: (date: Date) => void,
    setEndDate: (date: Date) => void,
}

const getInitialStartDate = () => {
    const now = new Date();
    now.setDate(new Date().getDate() - 30)
    return now;
}

const DateBicker = ({ setStartDate, setEndDate }: IProps) => {
    const [selectedDateRange, setSelectedDateRange] = useState<any>({
        startDate: getInitialStartDate(),
        endDate: new Date(),
        key: "selection"
    });

    const [isDateModalOpen, setIsDateModalOpen] = useState(false);

    useEffect(() => {
        setStartDate(selectedDateRange.startDate)
    }, [selectedDateRange.startDate])

    useEffect(() => {
        setEndDate(selectedDateRange.endDate)
    }, [selectedDateRange.endDate])

    const handleSelect = (ranges: any) => {
        setSelectedDateRange(ranges.selection);
    };

    return (
        <Style>
            <Button margin='0 0 1rem 0' onClick={() => setIsDateModalOpen(true)}>
                {dateToString(selectedDateRange.startDate)} - {dateToString(selectedDateRange.endDate)} 
            </Button>

            {isDateModalOpen &&
                <Modal close={() => setIsDateModalOpen(false)} fitWidth>
                    <Style>

                        <div className="range_large" dir='ltr'>
                            <DateRangePicker
                                className='date_range'
                                rangeColors={['#3832A0']}
                                onChange={handleSelect}
                                months={2}
                                moveRangeOnFirstSelection={false}
                                ranges={[selectedDateRange]}
                                direction="horizontal"
                            />
                        </div>
                        <div className="range_small" dir='ltr'>
                            <DateRange
                                className='date_range'
                                rangeColors={['#3832A0']}
                                onChange={handleSelect}
                                moveRangeOnFirstSelection={false}
                                ranges={[selectedDateRange]}
                                direction="horizontal"
                            />
                        </div>
                    </Style>
                </Modal>
            }

        </Style>
    )
}

export default DateBicker