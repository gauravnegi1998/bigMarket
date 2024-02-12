import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialUIModule } from "../MaterialModel/material-ui.module";

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    imports: [
        CommonModule,
        MaterialUIModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        ButtonComponent
    ]
})

export class InputModules { };