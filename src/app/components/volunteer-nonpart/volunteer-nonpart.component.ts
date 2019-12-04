import { Component, OnInit } from '@angular/core';
import { FeedbackOption } from '../../models/FeedbackOption';
import { Response } from '../../models/Response';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteer-nonpart',
  templateUrl: './volunteer-nonpart.component.html',
  styleUrls: ['./volunteer-nonpart.component.css']
})
export class VolunteerNonpartComponent implements OnInit {

  message: string = "";
  submitted: boolean = false;

  feedback: FeedbackOption = { eventId: "", employeeId: "", choice: "", status: "" };

  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;

  isHidden: boolean = true;
  response: Response = { message: "", httpStatus: 0 };


  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    // set feedback properties from query params
    this.feedback.eventId = this.route.snapshot.queryParamMap.get('eventid');
    this.feedback.employeeId = this.route.snapshot.queryParamMap.get('id');
    
    //url parameter checking method calling...On condition failure redirect to login
    this.feedbackService.urlchk(this.feedback.eventId,this.feedback.employeeId);

    //load options from service
    //var options = this.feedbackService.getOptions();
    this.option1 = "Did not recieve information about event";
    this.option2 = "Event not what I excepted";
    this.option3 = "Incorrectly registered";
    this.option4 = "Unexpected personal commitment";
    this.option5 = "Unexpected official work";
    this.option6 = "Do not wish to disclose";

  }

  selectChangeHandler(event: any) {
    this.feedback.choice = event.target.value;
  }

  save() {
    if(this.feedback.choice===""){
      alert("Select a reason");
    }
    else{
      this.feedback.status = "I";
      this.feedbackService.saveNonPartFeedback(this.feedback)
        .subscribe((data: Response) => {
          this.response.message = data.message;
          this.response.httpStatus = data.httpStatus;
          if (this.response.httpStatus == 200) {
            this.message = this.response.message;
            this.submitted = !this.submitted;
            this.isHidden = !this.isHidden;
          }
        }
        );
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
