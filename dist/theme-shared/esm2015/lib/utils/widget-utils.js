import { ReplaySubject } from 'rxjs';
export function getRandomBackgroundColor(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const r = ((i + 5) * (i + 5) * 474) % 255;
        const g = ((i + 5) * (i + 5) * 1600) % 255;
        const b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
export const chartJsLoaded$ = new ReplaySubject(1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvdXRpbHMvd2lkZ2V0LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsTUFBTSxVQUFVLHdCQUF3QixDQUFDLEtBQUs7SUFDNUMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztLQUMzRDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQmFja2dyb3VuZENvbG9yKGNvdW50KSB7XHJcbiAgY29uc3QgY29sb3JzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgciA9ICgoaSArIDUpICogKGkgKyA1KSAqIDQ3NCkgJSAyNTU7XHJcbiAgICBjb25zdCBnID0gKChpICsgNSkgKiAoaSArIDUpICogMTYwMCkgJSAyNTU7XHJcbiAgICBjb25zdCBiID0gKChpICsgNSkgKiAoaSArIDUpICogODQwNjUpICUgMjU1O1xyXG4gICAgY29sb3JzLnB1c2goJ3JnYmEoJyArIHIgKyAnLCAnICsgZyArICcsICcgKyBiICsgJywgMC43KScpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbG9ycztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXJ0SnNMb2FkZWQkID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XHJcbiJdfQ==