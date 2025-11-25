

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;

export function formatTimeAgo(dateString) {
    if (!dateString) return '';

    console.log(dateString);

    const past = new Date(dateString);
    const now = new Date();


    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < MINUTE) {
        return '방금 전';
    } else if (diffInSeconds < HOUR) {
        const minutes = Math.floor(diffInSeconds / MINUTE);
        return `${minutes}분 전`;
    } else if (diffInSeconds < DAY) {
        const hours = Math.floor(diffInSeconds / HOUR);
        return `${hours}시간 전`;
    } else if (diffInSeconds < WEEK) {
        const days = Math.floor(diffInSeconds / DAY);
        return `${days}일 전`;
    } else {
        return `${past.getMonth() + 1}월 ${past.getDate()}일`;
    }
}