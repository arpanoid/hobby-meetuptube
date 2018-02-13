import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule
        , MatInputModule
        , MatFormFieldModule
        , MatListModule, 
        MatExpansionModule,
        MatFormField,
        MatChipsModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , MatListModule
    , MatExpansionModule
    , MatChipsModule
    , MatIconModule
    , MatCardModule
    , MatDialogModule 
    , MatToolbarModule 
    , MatSidenavModule
  ],

  exports: [MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , MatListModule
    , MatExpansionModule
    , MatChipsModule
    , MatIconModule
    , MatCardModule 
    , MatDialogModule
    , MatToolbarModule
    , MatSidenavModule
   ],
})
export class MaterialModule { }