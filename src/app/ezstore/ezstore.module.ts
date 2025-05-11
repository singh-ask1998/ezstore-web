import { NgModule } from "@angular/core";
import { EZStoreComponent } from "./ezstore.component";
import { GlobalNavBarComponent } from "./global-nav-bar/global-nav-bar.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [EZStoreComponent,GlobalNavBarComponent],
    imports: [FormsModule],
    exports: [EZStoreComponent], // Important!
  })
  export class EzStoreModule {}