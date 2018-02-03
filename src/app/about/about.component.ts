import {Component} from '@angular/core';
import AboutProject from '../_models/about-project.model';
import AboutAuthor from '../_models/about-author.model';
import SocialLink from '../_models/social-link.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {

  aboutProject: AboutProject = new AboutProject(
    'Jedi Academy Cars',
    'Angular 5 web application',
    'This is a project for learning Angular5 given by @Samitier'
  );

  aboutAuthor: AboutAuthor = new AboutAuthor(
    'Eduard',
    'Maura i Puig',
    'Web developer @ inLab FIB',
    [
      new SocialLink('Twitter', 'https://twitter.com/edu_maura'),
      new SocialLink('LinkedIn', 'https://www.linkedin.com/in/eduard-maura-i-puig'),
      new SocialLink('GitHub', 'https://github.com/mapu77')
    ]
  );

}
