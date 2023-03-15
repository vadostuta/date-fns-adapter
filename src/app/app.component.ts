import { Component, OnInit } from '@angular/core'
import { toDate } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mydate = format(new Date(), 'EEEE, MMMM d, yyyy')
  mytime = format(new Date(), 'HH:mm')

  timestamp = 1678575600000
  date = toDate(this.timestamp)
  formattedDate = format(this.date, 'EEEE, MMMM d, yyyy, HH:mm')

  timezone = 'Europe/Zurich'

  tzdate = new Date(this.timestamp)
  zonedDate = utcToZonedTime(this.tzdate, this.timezone)

  tzformattedDate = format(this.zonedDate, 'MMMM d', {
    timeZone: this.timezone
  })
  tzformattedTime = format(this.zonedDate, 'HH:mm', { timeZone: this.timezone })

  tzformattedDate2 = format(
    utcToZonedTime(1679980500000, this.timezone),
    'HH:mm',
    { timeZone: this.timezone }
  )

  // datepicker stuff
  public startAt!: any
  public minDate: any = new Date()
  public selected: any

  public handleSelectedDate (data: any): void {
    console.log(data)
  }

  dateFilter = (date: Date): boolean => {
    return true
  }

  ngOnInit (): void {
    // this.selected = new Date()
    // this.startAt = this.tz(this.selected)
    // const res = [
    //   {
    //     date: 1678575600000,
    //     avalaible: false
    //   },
    //   {
    //     date: 1678662000000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1678748400000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1678834800000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1678921200000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679007600000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679094000000,
    //     avalaible: false
    //   },
    //   {
    //     date: 1679180400000,
    //     avalaible: false
    //   },
    //   {
    //     date: 1679266800000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679353200000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679439600000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679526000000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679612400000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679698800000,
    //     avalaible: false
    //   },
    //   {
    //     date: 1679785200000,
    //     avalaible: false
    //   },
    //   {
    //     date: 1679868000000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1679954400000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1680040800000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1680127200000,
    //     avalaible: true
    //   },
    //   {
    //     date: 1680213600000,
    //     avalaible: true
    //   }
    // ].filter(el => el.avalaible === true)
    // this.dateFilter = (date: any): boolean => {
    //   const getd = (d: any) => {
    //     return format(utcToZonedTime(d, this.timezone), 'yyyy-MM-dd', {
    //       timeZone: this.timezone
    //     })
    //   }
    //   const d = getd(date)
    //   console.log(d)
    //   const allowed = res.map((el: any) =>
    //     // moment(el.date).format('YYYY-MM-DD')
    //     // this.tz(format(el.date, 'yyyy-MM-dd'))
    //     getd(el.date)
    //   )
    //   console.log(allowed)
    //   return allowed.includes(
    //     // moment.tz(date, moment.tz.guess()).format('YYYY-MM-DD')
    //     d
    //   )
    // }
  }

  tz (date: any) {
    console.log('tz date: ' + date)

    return utcToZonedTime(date, this.timezone)
  }
}
