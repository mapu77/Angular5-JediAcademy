import SocialLink from './social-link.model';

export default class AboutAuthorModel {
  constructor(public name: string = '',
              public surname: string = '',
              public biography: string = '',
              public links: SocialLink[] = []) {
  }

  getFullName(): string {
    return this.name + ' ' + this.surname;
  }
}
