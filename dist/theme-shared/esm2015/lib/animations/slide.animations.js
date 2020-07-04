import { animate, style, transition, trigger } from '@angular/animations';
export const slideFromBottom = trigger('slideFromBottom', [
    transition('* <=> *', [
        style({ 'margin-top': '20px', opacity: '0' }),
        animate('0.2s ease-out', style({ opacity: '1', 'margin-top': '0px' })),
    ]),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2FuaW1hdGlvbnMvc2xpZGUuYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFTLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDeEYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtJQUN4RCxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUN2RSxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBxdWVyeSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5leHBvcnQgY29uc3Qgc2xpZGVGcm9tQm90dG9tID0gdHJpZ2dlcignc2xpZGVGcm9tQm90dG9tJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPD0+IConLCBbXHJcbiAgICBzdHlsZSh7ICdtYXJnaW4tdG9wJzogJzIwcHgnLCBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICBhbmltYXRlKCcwLjJzIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScsICdtYXJnaW4tdG9wJzogJzBweCcgfSkpLFxyXG4gIF0pLFxyXG5dKTtcclxuIl19