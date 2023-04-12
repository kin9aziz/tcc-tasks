import { CloudOptions } from 'angular-tag-cloud-module';
import { ApexOptions } from 'ng-apexcharts/lib/model/apex-types';

export const options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: false,
};





function generateColor(): string{
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}


export var ParticipatingHashtags: ApexOptions = {
    chart: {
        height: 400,
        type: "bar",
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: false,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: 32,
        style: {
            fontFamily: 'ArabicRegular',
            fontSize: '14px',
            colors: ['#adb5bd']
        }
    },
    grid: {
        show: true
    },
    series: [{
        data: [],
        name: 'Tweet',
    }],
    xaxis: {
        categories: []
    },
    yaxis: {
        // opposite: true,
        // reversed: true,
        show: true
    }
};
export var CloudWord = [
    { text: 'Hello', weight: 10,  color: generateColor()},
    { text: 'Saudi Arabia', weight: 7,  color: generateColor()},
    { text: 'Goal', weight: 6,  color: generateColor()},
    { text: 'Kill', weight: 3,  color: generateColor()},
    { text: 'Good', weight: 2,  color: generateColor()},
    { text: 'HAHAHAHA', weight: 8,  color: generateColor()},
    { text: 'Wake Up', weight: 4,  color: generateColor()},
    { text: 'Nice', weight: 4,  color: generateColor()},
    { text: 'Run', weight: 2,  color: generateColor()},
    { text: 'Keep', weight: 8,  color: generateColor()},
    { text: 'Do', weight: 10,  color: generateColor()},
    { text: 'Meet', weight: 9,  color: generateColor()},
    { text: 'Greet', weight: 6,  color: generateColor()},
    { text: 'Fashion', weight: 3,  color: generateColor()},
    { text: 'When', weight: 7,  color: generateColor()},
    { text: 'How', weight: 2,  color: generateColor()},
    { text: 'Clear', weight:5,  color: generateColor()},
];