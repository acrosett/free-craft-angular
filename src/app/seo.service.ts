import {Injectable} from '@angular/core'; 
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }


  updateTitle(title: string) {
    this.title.setTitle(title);
    this.updateOgTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
    this.updateOgDescription(desc);
  }

  updateOgType(type: string) {
    this.meta.updateTag({ name: 'og:type', content: type })
  }

  updateOgTitle(title: string) {
    this.meta.updateTag({ name: 'og:title', content: title })
  }

  updateOgDescription(description: string) {
    this.meta.updateTag({ name: 'og:description', content: description })
  }

  updateOgImage(image: string) {
    this.meta.updateTag({ name: 'og:image', content: image })
  }
}