import { TrainingModule, QuizQuestion, Drill } from './types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'stance-1',
    category: 'Stance',
    title: 'The Foundation: Olympic Stance',
    description: 'Master the 45-degree balanced stance for maximum stability.',
    content: 'The Olympic stance is the bedrock of stability. Position your feet shoulder-width apart at a 30-45 degree angle to the target. Distribute your weight evenly or slightly towards the non-shooting side to counter-balance the pistol. Keep your head erect and turn it naturally toward the target. Your non-shooting hand should be anchored (e.g., in a pocket) to ensure the shoulder remains relaxed and consistent. \n\nKey details from the experts:\n- Natural Point of Aim (NPA): Close your eyes, lift the pistol, and open them. If you aren\'t on target, move your feet, not your arm.\n- Knee Tension: Keep knees firm but not hyperextended to avoid tremors.\n- Shoulder Alignment: The shooting shoulder should be relaxed and down, creating a consistent skeletal support.\n- Head Level: Avoid tilting your head to the side, as this can affect your inner ear balance and visual perception.',
    imageUrl: 'public/assets/stance-points.png',
    videoUrl: 'https://www.youtube.com/embed/bA5bwWR8Hn0'
    
    
  },
  {
    id: 'grip-1',
    category: 'Grip',
    title: 'Precision Grip Mechanics',
    description: 'Learn the three-point pressure grip for maximum stability.',
    content: 'A perfect grip allows for a free trigger finger and consistent recoil. Seat the pistol high in the "V" of your hand. Apply firm pressure with the middle, ring, and pinky fingers straight back into the palm. The thumb should rest relaxed or with light downward pressure. Crucially, ensure the index finger has a clear gap from the frame so its movement doesn\'t disturb the sights.\n\nComprehensive Details:\n- High Backstrap: The higher the hand sits, the less muzzle flip you experience. The recoil is directed straight back into the arm.\n- Trigger Finger Isolation: The finger should only touch the trigger blade, never the frame of the pistol. This prevents lateral pressure.\n- Pressure Consistency: Maintain the same 60-70% grip pressure throughout the entire shot process. Changing pressure (milking) is a common error.\n- Three-Point Pressure: Focus on the pressure between the palm, the fingers, and the backstrap.',
    imageUrl: '/assets/grip.png',
    videoUrl: 'https://www.youtube.com/embed/cD7vNhLh9ao'
  },
  {
    id: 'wrist-1',
    category: 'Grip',
    title: 'The Wrist and Hand',
    description: 'Mastering wrist lock and hand tension for recoil control.',
    content: 'The wrist must be locked and firm to act as a solid extension of the arm. Any "play" in the wrist will result in inconsistent shot placement. This module covers the specific tension required in the hand and the importance of a straight wrist line from the forearm through the pistol.\n\nTechnical Breakdown:\n- Wrist Lock: The wrist should be "set" before the lift and remain immobile until follow-through is complete.\n- Straight Line: Align the barrel with the bones of the forearm to transmit recoil directly into the shoulder.\n- Handshake Tension: Use the same pressure you would for a firm, professional handshake.\n- Muscle Memory: Practice locking the wrist consistently during dry fire to ensure it becomes automatic during competition.',
    imageUrl: 'public/assets/triggering.jpg',
    videoUrl: 'https://www.youtube.com/embed/oJsghHd_wbY'
  },
  {
    id: 'stance-2',
    category: 'Stance',
    title: 'Natural Point of Aim (NPA)',
    description: 'Ensure your body is naturally aligned with the target.',
    content: 'Natural Point of Aim (NPA) is the position where your body naturally points when relaxed. To find it: 1. Close your eyes and lift the pistol. 2. Open your eyes. 3. If you aren\'t on target, move your feet, not your arm. This ensures you aren\'t using muscle tension to "hold" the pistol on target.\n\nNPA Refinement:\n- Vertical NPA: Adjust the distance between your feet to change the natural height of your arm.\n- Horizontal NPA: Pivot your entire stance around your lead foot to align with the bullseye.\n- Check and Re-check: Perform an NPA check before every series of shots.',
    imageUrl: 'public/assets/npa.png',
    videoUrl: 'https://www.youtube.com/embed/cD7vNhLh9ao'
  },
  {
    id: 'sight-1',
    category: 'Sight Alignment',
    title: 'Pistol Sight Alignment',
    description: 'The relationship between front and rear sights.',
    content: 'Sight alignment is the most critical technical skill. The top of the front sight must be perfectly level with the top of the rear sight, with equal light gaps on both sides. Your focus must be 100% on the front sight blade, making it sharp while the target and rear sight appear slightly blurred. This minimizes angular error.\n\nComprehensive Details:\n- Angular Error: A tiny 1mm misalignment at the pistol results in a massive 10cm miss at the 10m target.\n- Equal Light: The "light gaps" on either side of the front sight must be identical to ensure horizontal centering.\n- Level Tops: The vertical relationship is just as important; the front sight must not "peek" above or "sink" below the rear notch.\n- Front Sight Focus: The human eye cannot focus on three objects at different distances simultaneously. Choose the front sight.',
    imageUrl: '/assets/sight-with-dimensions.jpg',
    videoUrl: 'https://www.youtube.com/embed/Y7Rzoh4su08'
  },
  {
    id: 'sight-2',
    category: 'Sight Alignment',
    title: 'The Correct Sight Picture',
    description: 'How to position your aligned sights on the target.',
    content: 'The "Sight Picture" is where you place your aligned sights on the target. Use the "Sub-Six" hold: aim in the white area just below the black bullseye. This provides a clear, high-contrast reference point, preventing the "black-on-black" blurring that happens when aiming at the center.\n\nSight Picture Strategy:\n- The "Line of White": Maintain a thin strip of white between the top of your sights and the bottom of the bullseye for maximum contrast.\n- Area Aiming: Do not try to "pin" the sights to a single point. Accept the natural movement within the white area.\n- Contrast Advantage: Black sights on a white background are much easier for the eye to align than black sights on a black bullseye.',
    imageUrl: '/public/assets/sight-picture.png',
    videoUrl: 'https://www.youtube.com/embed/Akv-el7m2l4'
  },
  {
    id: 'hold-1',
    category: 'Technique',
    title: 'The Stability Window',
    description: 'Understanding the peak period of stability during your hold.',
    content: 'Every shooter has an "area of movement." The goal isn\'t to be perfectly still, but to keep your movement small and centered. Peak stability usually occurs 5-8 seconds after settling into the aiming area. This is your "Stability Window."\n\nDetailed Insights:\n- Area Aiming: Accept the natural wobble. Trying to "stop" the movement causes muscle tension and jerking.\n- Core Stability: Stability comes from the legs and core, not just the arm.\n- The Window: If the shot hasn\'t fired by 10-12 seconds, your stability will rapidly decrease. Put the pistol down and reset.',
    imageUrl: '/assets/stability.png',
    videoUrl: 'https://www.youtube.com/embed/cQdNVRz7hOs'
  },
  {
    id: 'process-1',
    category: 'Technique',
    title: 'The Shot Cycle',
    description: 'Coordinating arm lift, breathing, and trigger control.',
    content: 'A disciplined cycle: 1. Lift pistol above target while inhaling. 2. Lower into the aiming area while exhaling halfway. 3. Settle into the "respiratory pause." 4. Execute the trigger press within the 5-8 second stability window. 5. Follow through for 2 seconds after the shot.\n\nCycle Breakdown:\n- The Lift: Raise the arm 15-20 degrees above the target to allow for a controlled descent.\n- The Descent: Use the weight of the pistol to help you settle into the white area below the bullseye.\n- The Window: If the shot hasn\'t fired by 10 seconds, put the pistol down and reset.',
    imageUrl: '/assets/prepare-for-shot.png',
    videoUrl: 'https://www.youtube.com/embed/oJsghHd_wbY'
  },
  {
    id: 'overload-1',
    category: 'Technique',
    title: 'Progressive Overload Principle',
    description: 'How to build strength endurance for shooting.',
    content: 'To improve stability, you must gradually increase the duration of your "holds." Practice holding the pistol on target for 45-60 seconds (dry) to build the specific shoulder and core endurance required for a full 60-shot competition match.\n\nTraining Guidelines:\n- Hold Endurance: Start with 30-second holds and add 5 seconds each week as your stability improves.\n- Quality over Quantity: If your hold becomes shaky, put the pistol down. Never train with "bad" movement.\n- Rest Ratios: Allow for a 1:1 rest-to-work ratio to ensure your muscles recover between sets.',
    imageUrl: '/assets/progressive-overload.png'
  },
  {
    id: 'breathing-1',
    category: 'Mental',
    title: 'The Breathing Cycle',
    description: 'Sync your shot with your respiratory pause.',
    content: 'Proper breathing lowers your heart rate and stabilizes your platform. Take two deep, calming breaths during the lift. As you lower the pistol into the sub-six area, release half your breath and hold. This creates a "respiratory pause" where body movement is at its absolute minimum for 6-10 seconds.\n\nBreathing Mechanics:\n- Abdominal Breathing: Breathe from the diaphragm to avoid chest movement.\n- The Pause: The pause should be natural, not a forced "breath hold" which causes CO2 buildup and tremors.',
    imageUrl: '/public/assets/pistol-arm-lifts.png',
    videoUrl: 'https://www.youtube.com/embed/x8aRU-6Io9U'
  },
  {
    id: 'trigger-1',
    category: 'Trigger Control',
    title: 'Smooth Execution',
    description: 'The "Surprise Break" method for perfect shots.',
    content: 'Trigger control is about applying smooth, constant pressure directly to the rear. The shot should "surprise" you when it breaks. If you try to "time" the shot when the sights look perfect, you will likely jerk the trigger and pull the shot off-center. \n\nComprehensive Details:\n- First Stage: Take up 60-80% of the trigger weight as you settle into the aiming area. This is the "prep" stage.\n- Second Stage: Apply a slow, continuous increase in pressure until the shot breaks. Avoid "poking" the trigger.\n- Straight Back: Ensure the pressure is perfectly parallel to the barrel. Any lateral movement will pull the front sight out of alignment.\n- The Surprise: If you know exactly when the shot will fire, you will flinch. Let the shot happen.',
    imageUrl: 'public/assets/olympic-stance.png',
    videoUrl: 'https://www.youtube.com/embed/Akv-el7m2l4'
  },
  {
    id: 'science-1',
    category: 'Mental',
    title: 'The Science of the 10-Ring',
    description: 'Key technical components identified by sports science.',
    content: 'Research identifies three pillars of a 10: 1. Aiming Accuracy (centering your movement), 2. Stability of Hold (minimizing movement), and 3. Timing of Trigger (releasing during peak stability). Aiming accuracy is often the most significant factor for elite performance.\n\nComprehensive Details:\n- Stability Window: Elite shooters release the shot within a 1.5-second window of maximum stability, usually 5-8 seconds into the hold.\n- Front Sight Focus: Eye tracking shows champions maintain 100% focus on the front sight for at least 2 seconds before the break.\n- Trigger Pull Dynamics: The speed of the trigger pull should be consistent. Science shows that "jerking" even slightly increases group size by 40%.\n- Natural Point of Aim: Scientific studies confirm that fighting your natural alignment leads to muscle fatigue and tremors.',
    imageUrl: 'public/assets/mental prep.png',
    videoUrl: 'https://www.youtube.com/embed/Akv-el7m2l4'
  },
  {
    id: 'equipment-1',
    category: 'Equipment',
    title: 'The Ideal Junior Pistol',
    description: 'Key features of a starter pistol for young athletes.',
    content: 'Junior equipment should be lightweight (700-850g) to prevent fatigue and allow for proper technique development. Sights should be clear and adjustable. For air pistols, a 500g trigger weight is standard, ensuring safety while allowing for a precise "surprise" break.\n\nEquipment Selection:\n- Weight Management: A pistol that is too heavy will lead to poor posture and "elbow drop."\n- Grip Fit: The grip should allow the shooter\'s hand to wrap naturally without stretching the fingers.\n- Trigger Reach: The index finger should reach the trigger blade comfortably while maintaining a 90-degree angle.\n- Balance: Look for a pistol with adjustable weights to fine-tune the balance point as the shooter grows.',
    imageUrl: '/assets/safety-downrange.png',
    videoUrl: 'https://www.youtube.com/embed/cD7vNhLh9ao'
  },
  {
    id: 'safety-1',
    category: 'Safety',
    title: 'The Three Golden Rules',
    description: 'Muzzle control, open actions, and safety flags.',
    content: 'Safety is non-negotiable: 1. Muzzle always downrange. 2. Action open when not on the firing line. 3. CBI (Clear Barrel Indicator) inserted at all times when the pistol is not in use. Treat every firearm as if it were loaded.\n\nSafety Protocols:\n- The "Laser" Rule: Treat the muzzle as if it were emitting a continuous laser beam that destroys anything it touches.\n- Finger Discipline: Keep your finger outside the trigger guard until your sights are on the target and you are ready to fire.\n- Range Commands: Always obey the Range Officer\'s commands immediately and without question.\n- Eye and Ear Protection: Always wear appropriate safety gear, even when shooting low-power air pistols.',
    imageUrl: '/assets/safety-flag.png',
    videoUrl: 'https://www.youtube.com/embed/cD7vNhLh9ao'
  },
  {
    id: 'followthrough-1',
    category: 'Technique',
    title: 'Calling the Shot',
    description: 'The art of follow-through and mental snapshots.',
    content: 'Follow-through is maintaining your focus and position for 2 seconds after the shot fires. This allows you to "call the shot"—identifying exactly where the front sight was at the moment of ignition. This mental snapshot is the most valuable feedback tool for a shooter.\n\nFollow-Through Essentials:\n- Visual Snapshot: Keep your eyes on the front sight even after the shot breaks.\n- Physical Hold: Do not lower the pistol immediately; hold the position to ensure the pellet has fully cleared the barrel.\n- Mental Analysis: Ask yourself: "Where was the front sight when it fired?"\n- Recoil Management: Observe the natural movement of the sights during recoil to ensure it returns to the same point.',
    imageUrl: 'public/assets/suprise break.png',
    videoUrl: 'https://www.youtube.com/embed/oJsghHd_wbY'
  },
  {
    id: 'mental-game-1',
    category: 'Mental',
    title: 'The Mental Game',
    description: 'Developing the mindset of a champion.',
    content: 'Success in shooting is 90% mental. Focus on the *process* (stance, grip, sight, trigger) rather than the *outcome* (the score). Use visualization to rehearse perfect shots and develop a "reset" routine to stay calm after a poor shot. A champion\'s mind is quiet and task-oriented.\n\nMindset Strategies:\n- Process Focus: Your only job is to execute the next shot perfectly. The score takes care of itself.\n- Visualization: Spend 5 minutes before a match imagining the perfect sight alignment and smooth trigger break.\n- The Reset: If a shot goes wide, take a deep breath and "delete" it from your memory.\n- Self-Talk: Maintain positive, instructional self-talk (e.g., "Front sight, smooth press") instead of critical thoughts.',
    imageUrl: '/assets/hat-technique.png',
    videoUrl: 'https://www.youtube.com/embed/Q2NCbuBzEAs'
  },
  {
    id: 'dry-fire-1',
    category: 'Technique',
    title: 'Dry Fire Excellence',
    description: 'The secret to rapid improvement without ammunition.',
    content: 'Dry fire is the most efficient way to train. It allows you to focus purely on technique without the distraction of recoil or noise. 15 minutes of daily dry fire—focusing on perfect trigger presses and steady holds—will improve your scores faster than weekly live fire sessions.\n\nDry Fire Drills:\n- Wall Hold: Aim at a blank wall to focus purely on sight alignment and stability without the distraction of a bullseye.\n- Trigger Isolation: Practice the two-stage pull while watching the front sight for any movement.\n- The Coin Drill: Place a coin on the front sight and execute a dry fire shot without the coin falling off.\n- Consistency: Treat every dry fire repetition with the same intensity and focus as a live shot.',
    imageUrl: '/assets/wall-hold.png',
    videoUrl: 'https://www.youtube.com/embed/Akv-el7m2l4'
  },
  {
    id: 'live-fire-1',
    category: 'Technique',
    title: 'Live Fire Transition',
    description: 'Applying your skills on the range.',
    content: 'When moving to live fire, the goal is to maintain the exact same mental and physical process as dry fire. Don\'t "fight" the recoil; let it happen naturally. Focus on the front sight and trust that your trigger finger will execute the smooth press you\'ve practiced.\n\nTransition Tips:\n- Ignore the Hole: Do not look at the target through a scope after every shot. It breaks your concentration.\n- Trust the Process: If your dry fire is good, your live fire will be good. Recoil is just a byproduct.\n- Shot Calling: Use your live fire sessions to verify your shot calling ability. Compare your mental snapshot to the actual hole in the target.\n- Quality over Quantity: It is better to fire 10 perfect shots than 50 mediocre ones.',
    imageUrl: '/assets/stance.png',
    videoUrl: 'https://www.youtube.com/embed/cD7vNhLh9ao'
  }
];

export const QUIZZES: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Where should your visual focus be during the final stage of the trigger pull?',
    options: ['The center of the target', 'The rear sight notch', 'The front sight blade', 'The target black area'],
    correctAnswer: 2,
    explanation: 'Focusing on the front sight is critical for maintaining sight alignment throughout the shot execution.'
  },
  {
    id: 'q2',
    question: 'What is the ideal angle of the body relative to the target in a standard Olympic stance?',
    options: ['0 degrees (facing target)', '90 degrees (side on)', '30-45 degrees', '15 degrees'],
    correctAnswer: 2,
    explanation: 'A 30-45 degree angle provides the best balance between stability and natural point of aim.'
  },
  {
    id: 'q3',
    question: 'What does "MAT" stand for in shooting safety?',
    options: ['Muzzle, Action, Target', 'Muzzle, Action, Trigger', 'Marksmanship, Aim, Timing', 'Muzzle, Alignment, Trigger'],
    correctAnswer: 1,
    explanation: 'MAT stands for Muzzle (safe direction), Action (open when not firing), and Trigger (finger off until ready).'
  },
  {
    id: 'q4',
    question: 'When is it safe to put your finger on the trigger?',
    options: ['As soon as you pick up the pistol', 'When you start to lift the pistol', 'Only when you are ready to fire', 'When the range officer says "Load"'],
    correctAnswer: 2,
    explanation: 'The trigger finger should remain outside the trigger guard until the sights are on the target and you are ready to fire.'
  },
  {
    id: 'q5',
    question: 'What is the first thing you do when picking up a pistol?',
    options: ['Check the sights', 'Check if it is unloaded and the action is open', 'Dry fire it once', 'Point it at the target'],
    correctAnswer: 1,
    explanation: 'Always verify the safety status of any firearm immediately upon handling it.'
  },
  {
    id: 'q6',
    question: 'What does a "Safety Flag" (CBI) indicate?',
    options: ['The range is hot', 'The pistol is loaded', 'The chamber is empty and the action is open', 'The shooter is ready'],
    correctAnswer: 2,
    explanation: 'A Clear Barrel Indicator (CBI) provides a visual confirmation that the pistol is in a safe state.'
  },
  {
    id: 'q7',
    question: 'What is the command to stop all firing immediately?',
    options: ['Stop', 'Cease Fire', 'Freeze', 'Range Closed'],
    correctAnswer: 1,
    explanation: '"CEASE FIRE" is the universal command to stop all activity on the range immediately.'
  },
  {
    id: 'q8',
    question: 'How wide should your feet be in a shooting stance?',
    options: ['Heels touching', 'Twice shoulder width', 'Shoulder width apart', 'One foot in front of the other'],
    correctAnswer: 2,
    explanation: 'Shoulder width provides a stable, balanced base for the shooting platform.'
  },
  {
    id: 'q9',
    question: 'What is "Natural Point of Aim" (NPA)?',
    options: ['Where you want the shot to go', 'Where the pistol points when you are relaxed', 'The center of the bullseye', 'The highest point of your lift'],
    correctAnswer: 1,
    explanation: 'NPA is the direction the pistol points when your muscles are relaxed in your stance.'
  },
  {
    id: 'q10',
    question: 'How do you adjust your NPA horizontally?',
    options: ['Move your arm', 'Twist your waist', 'Move your feet', 'Adjust the sights'],
    correctAnswer: 2,
    explanation: 'Horizontal NPA adjustments should always be made by moving the feet to avoid muscle tension.'
  },
  {
    id: 'q11',
    question: 'How much pressure should be applied in a "handshake" grip?',
    options: ['Very light', 'Firm but not trembling', 'As hard as possible', 'Only with the thumb'],
    correctAnswer: 1,
    explanation: 'A firm handshake pressure provides stability without causing muscle tremors.'
  },
  {
    id: 'q12',
    question: 'What is "milking" the grip?',
    options: ['Cleaning the pistol', 'Changing pressure during the trigger pull', 'Applying oil to the grip', 'Holding the pistol too low'],
    correctAnswer: 1,
    explanation: 'Milking is the error of changing grip pressure as the trigger is pulled, which moves the sights.'
  },
  {
    id: 'q13',
    question: 'Where should the "V" of the hand be placed?',
    options: ['Low on the grip', 'High on the backstrap', 'On the side of the grip', 'Near the trigger guard'],
    correctAnswer: 1,
    explanation: 'Placing the "V" high on the backstrap aligns the recoil with the arm and improves stability.'
  },
  {
    id: 'q14',
    question: 'What part of the finger should touch the trigger?',
    options: ['The tip', 'The first joint', 'The center of the first pad', 'The second pad'],
    correctAnswer: 2,
    explanation: 'The center of the first pad allows for a straight-back trigger pull.'
  },
  {
    id: 'q15',
    question: 'What is "Sight Alignment"?',
    options: ['Sights on the target', 'Relationship between front and rear sights', 'Closing one eye', 'Focusing on the target'],
    correctAnswer: 1,
    explanation: 'Sight alignment is the precise centering of the front sight in the rear sight notch.'
  },
  {
    id: 'q16',
    question: 'In a "6 o\'clock hold", where are the sights positioned?',
    options: ['Center of the bullseye', 'Top of the target', 'Just below the black bullseye', 'Left of the target'],
    correctAnswer: 2,
    explanation: 'A 6 o\'clock hold provides a clear contrast between the black sights and the white area below the bullseye.'
  },
  {
    id: 'q17',
    question: 'If the front sight is too high in the rear notch, where will the shot go?',
    options: ['Low', 'High', 'Left', 'Right'],
    correctAnswer: 1,
    explanation: 'The shot follows the front sight; if the front sight is high, the shot will hit high.'
  },
  {
    id: 'q18',
    question: 'What is a "Surprise Break"?',
    options: ['The pistol breaking', 'The shot firing without knowing the exact millisecond', 'A loud noise on the range', 'Missing the target'],
    correctAnswer: 1,
    explanation: 'A surprise break ensures that the shooter does not flinch or jerk in anticipation of the shot.'
  },
  {
    id: 'q19',
    question: 'What is "Follow-through"?',
    options: ['Walking to the target', 'Maintaining focus for a second after the shot', 'Loading the next pellet', 'Cleaning the range'],
    correctAnswer: 1,
    explanation: 'Follow-through ensures the shot is fully executed before the shooter moves or relaxes.'
  },
  {
    id: 'q20',
    question: 'What is "Calling the Shot"?',
    options: ['Yelling "Ten!"', 'Predicting the hit based on the sight picture at the break', 'Naming your pistol', 'Telling the RO you are ready'],
    correctAnswer: 1,
    explanation: 'Calling the shot is a vital feedback tool to confirm the shooter\'s awareness of the sight alignment at the moment of discharge.'
  },
  {
    id: 'q21',
    question: 'What is the "Stability Window"?',
    options: ['A literal window on the range', 'The period of peak stability during a hold', 'The time between matches', 'The size of the target'],
    correctAnswer: 1,
    explanation: 'The stability window is usually between 5-8 seconds into the hold, before fatigue sets in.'
  },
  {
    id: 'q22',
    question: 'What is the minimum trigger weight for an Olympic Air Pistol?',
    options: ['250 grams', '500 grams', '1000 grams', 'No limit'],
    correctAnswer: 1,
    explanation: 'Olympic rules require a minimum of 500 grams for safety and consistency.'
  },
  {
    id: 'q23',
    question: 'What is the standard distance for Air Pistol competition?',
    options: ['5 meters', '10 meters', '25 meters', '50 meters'],
    correctAnswer: 1,
    explanation: '10 meters is the international standard for Olympic Air Pistol.'
  },
  {
    id: 'q24',
    question: 'What caliber is used in standard Air Pistol?',
    options: ['.22', '.177 (4.5mm)', '9mm', '.38'],
    correctAnswer: 1,
    explanation: '.177 caliber (4.5mm) lead pellets are the standard for competition.'
  },
  {
    id: 'q25',
    question: 'How many shots are in a standard Men\'s/Women\'s Air Pistol match?',
    options: ['30 shots', '40 shots', '60 shots', '100 shots'],
    correctAnswer: 2,
    explanation: 'Both Men\'s and Women\'s matches now consist of 60 shots in the qualification round.'
  },
  {
    id: 'q26',
    question: 'What should you do if you have a malfunction?',
    options: ['Try to fix it quickly', 'Put the pistol in your bag', 'Keep muzzle downrange and raise your hand', 'Ask the shooter next to you'],
    correctAnswer: 2,
    explanation: 'Safety first: keep the muzzle downrange and notify the Range Officer.'
  },
  {
    id: 'q27',
    question: 'What is "Equal Light" in sight alignment?',
    options: ['The sun being out', 'Equal space on both sides of the front sight in the notch', 'Using two lamps', 'Bright target area'],
    correctAnswer: 1,
    explanation: 'Equal light ensures the front sight is perfectly centered horizontally in the rear notch.'
  },
  {
    id: 'q28',
    question: 'Why should trigger pressure be "continuous"?',
    options: ['To fire faster', 'To avoid jerking or flinching', 'To save air', 'To keep the barrel cool'],
    correctAnswer: 1,
    explanation: 'Continuous, smooth pressure leads to a surprise break and a more accurate shot.'
  },
  {
    id: 'q29',
    question: 'What is the primary purpose of the stance?',
    options: ['To look professional', 'To provide a stable platform', 'To follow the rules', 'To rest the arm'],
    correctAnswer: 1,
    explanation: 'A good stance minimizes body movement and provides a consistent base for shooting.'
  },
  {
    id: 'q30',
    question: 'Where should your weight be distributed on your feet?',
    options: ['On the heels', 'On the toes', 'Evenly between both feet', 'Mostly on the shooting side'],
    correctAnswer: 2,
    explanation: 'Even weight distribution improves balance and reduces fatigue.'
  },
  {
    id: 'q31',
    question: 'What should your non-shooting hand be doing?',
    options: ['Waving at friends', 'Holding the shooting arm', 'Tucked in pocket or belt', 'Holding a timer'],
    correctAnswer: 2,
    explanation: 'Securing the non-shooting hand prevents it from moving and disturbing your balance.'
  },
  {
    id: 'q32',
    question: 'Why is a "locked" elbow important?',
    options: ['It isn\'t important', 'Ensures consistent sight radius and stability', 'To prevent pain', 'To look like a pro'],
    correctAnswer: 1,
    explanation: 'A locked elbow creates a rigid lever, making the hold more consistent.'
  },
  {
    id: 'q33',
    question: 'What is "Sight Picture"?',
    options: ['A photo of your sights', 'Relationship between aligned sights and the target', 'The target itself', 'The rear sight only'],
    correctAnswer: 1,
    explanation: 'Sight picture is how the aligned sights look when placed on the target.'
  },
  {
    id: 'q34',
    question: 'What is "Trigger Reset"?',
    options: ['Turning the pistol off', 'Allowing the trigger to move forward for the next shot', 'Adjusting trigger weight', 'Cleaning the trigger'],
    correctAnswer: 1,
    explanation: 'Trigger reset is the forward movement required to engage the sear for the next shot.'
  },
  {
    id: 'q35',
    question: 'What is the "Trigger Freeze"?',
    options: ['The trigger getting cold', 'Inability to pull the trigger due to anxiety/over-focus', 'A broken trigger', 'Firing too many shots'],
    correctAnswer: 1,
    explanation: 'Trigger freeze is a mental block where the shooter cannot initiate the trigger pull despite wanting to.'
  },
  {
    id: 'q36',
    question: 'How should you react to a bad shot?',
    options: ['Get angry', 'Forget it and focus on the next shot', 'Stop shooting', 'Change your sights immediately'],
    correctAnswer: 1,
    explanation: 'Mental resilience is key; focus only on the process of the next shot.'
  },
  {
    id: 'q37',
    question: 'Why is visualization helpful?',
    options: ['It passes the time', 'Prepares the mind for perfect execution', 'It replaces practice', 'To dream about winning'],
    correctAnswer: 1,
    explanation: 'Mental rehearsal reinforces the correct neural pathways for successful execution.'
  },
  {
    id: 'q38',
    question: 'What is the purpose of an adjustable grip?',
    options: ['To make it look cool', 'To fit the shooter\'s hand perfectly', 'To add weight', 'To change colors'],
    correctAnswer: 1,
    explanation: 'A custom-fit grip ensures consistent hand placement and reduces muscle strain.'
  },
  {
    id: 'q39',
    question: 'What is the time limit for a 60-shot match (electronic targets)?',
    options: ['60 minutes', '75 minutes', '90 minutes', '120 minutes'],
    correctAnswer: 1,
    explanation: '75 minutes is the standard ISSF time limit for 60 shots on electronic targets.'
  },
  {
    id: 'q40',
    question: 'What is the highest score possible for a single shot?',
    options: ['10', '10.9', '11', '10.5'],
    correctAnswer: 1,
    explanation: 'On electronic targets, shots are scored to one decimal place, with 10.9 being a perfect center hit.'
  },
  {
    id: 'q41',
    question: 'Where should the muzzle ALWAYS be pointed?',
    options: ['At the floor', 'At the ceiling', 'Downrange or in a safe direction', 'At your feet'],
    correctAnswer: 2,
    explanation: 'Muzzle awareness is the most fundamental rule of firearm safety.'
  },
  {
    id: 'q42',
    question: 'Can you handle a pistol when someone is downrange?',
    options: ['Yes, if it\'s unloaded', 'Yes, if the action is open', 'No, never', 'Only if the RO says so'],
    correctAnswer: 2,
    explanation: 'Handling any firearm while people are downrange is strictly prohibited for safety.'
  },
  {
    id: 'q43',
    question: 'Which muscle group is most important for a stable pistol hold?',
    options: ['Biceps', 'Triceps', 'Shoulder (Deltoids)', 'Forearm'],
    correctAnswer: 2,
    explanation: 'The deltoids are the primary muscles used to lift and hold the pistol steady.'
  },
  {
    id: 'q44',
    question: 'Why is core strength important for shooters?',
    options: ['To look good', 'Maintains posture and reduces body sway', 'To lift heavy weights', 'To breathe faster'],
    correctAnswer: 1,
    explanation: 'A strong core provides a stable foundation for the entire shooting platform.'
  },
  {
    id: 'q45',
    question: 'What is the benefit of cardiovascular exercise for shooters?',
    options: ['Lower resting heart rate', 'Bigger muscles', 'Faster running', 'Better hearing'],
    correctAnswer: 0,
    explanation: 'A lower heart rate means less movement transmitted to the pistol between beats.'
  },
  {
    id: 'q46',
    question: 'How does hydration affect shooting performance?',
    options: ['It doesn\'t', 'Improves focus and reduces tremors', 'Makes you fire faster', 'Changes the sight alignment'],
    correctAnswer: 1,
    explanation: 'Dehydration can lead to loss of concentration and increased muscle tremors.'
  },
  {
    id: 'q47',
    question: 'What is "Canting" the pistol?',
    options: ['Cleaning it', 'Tilting it to the left or right', 'Dropping it', 'Adjusting the trigger'],
    correctAnswer: 1,
    explanation: 'Canting changes the relationship between the sights and the bore, affecting accuracy.'
  },
  {
    id: 'q48',
    question: 'What is the "Aiming Area"?',
    options: ['The whole target', 'The area where the sights naturally move during a hold', 'The center of the 10-ring', 'The range floor'],
    correctAnswer: 1,
    explanation: 'The aiming area is the natural "wobble" zone that every shooter has.'
  },
  {
    id: 'q49',
    question: 'Should you try to fire when the sights are perfectly still?',
    options: ['Yes, always', 'No, fire when they are moving within the aiming area', 'Only if you are a beginner', 'Wait for the target to move'],
    correctAnswer: 1,
    explanation: 'Sights are never perfectly still; successful shooters execute during the natural movement within the aiming area.'
  },
  {
    id: 'q50',
    question: 'What is "Area Aiming"?',
    options: ['Aiming at the whole range', 'Accepting natural movement within a small area', 'Aiming at the white part of the target', 'Closing both eyes'],
    correctAnswer: 1,
    explanation: 'Area aiming is a mental technique to accept wobble and focus on a smooth trigger release.'
  },
  {
    id: 'q51',
    question: 'What is "Positive Self-Talk"?',
    options: ['Talking to your pistol', 'Using encouraging phrases to build confidence', 'Yelling at the target', 'Singing during the match'],
    correctAnswer: 1,
    explanation: 'Positive self-talk helps maintain a constructive and confident mindset.'
  },
  {
    id: 'q52',
    question: 'What is "Process over Outcome"?',
    options: ['Focusing on the score', 'Focusing on the steps of the shot rather than the result', 'Ignoring the rules', 'Thinking about the trophy'],
    correctAnswer: 1,
    explanation: 'Focusing on the execution process leads to better results than worrying about the score.'
  },
  {
    id: 'q53',
    question: 'How do you handle a "Flyer" (a shot far from the group)?',
    options: ['Get angry', 'Analyze the cause, then let it go', 'Quit the match', 'Change your stance immediately'],
    correctAnswer: 1,
    explanation: 'Analyze the error to learn from it, then clear your mind for the next shot.'
  },
  {
    id: 'q54',
    question: 'What is the "Inner Ten"?',
    options: ['The 9-ring', 'The smaller circle inside the 10-ring used for tie-breaking', 'A secret shooting club', 'The first 10 shots'],
    correctAnswer: 1,
    explanation: 'Inner tens (X-counts) are used to break ties in competition scores.'
  },
  {
    id: 'q55',
    question: 'What is the maximum weight for an Olympic Air Pistol?',
    options: ['1.0 kg', '1.5 kg', '2.0 kg', 'No limit'],
    correctAnswer: 1,
    explanation: 'ISSF rules limit the total weight of the pistol to 1.5 kg.'
  },
  {
    id: 'q56',
    question: 'What is the maximum overall length for an Air Pistol?',
    options: ['300 mm', '420 mm', '500 mm', '600 mm'],
    correctAnswer: 1,
    explanation: 'The pistol must fit within a standard measuring box of 420 x 200 x 50 mm.'
  },
  {
    id: 'q57',
    question: 'Can you use a support for your shooting arm in competition?',
    options: ['Yes, if you are tired', 'No, it must be free-standing', 'Only in the sighting period', 'If the RO allows it'],
    correctAnswer: 1,
    explanation: 'Olympic pistol shooting is strictly a free-standing, unsupported discipline.'
  },
  {
    id: 'q58',
    question: 'What is the "Preparation and Sighting" time?',
    options: ['5 minutes', '15 minutes', '30 minutes', 'There is no sighting time'],
    correctAnswer: 1,
    explanation: 'Shooters have 15 minutes to set up and fire unlimited sighting shots before the match.'
  },
  {
    id: 'q59',
    question: 'How many sighting shots are allowed?',
    options: ['5 shots', '10 shots', 'Unlimited during the sighting period', 'None'],
    correctAnswer: 2,
    explanation: 'You can fire as many sighting shots as you need within the 15-minute preparation period.'
  },
  {
    id: 'q61',
    question: 'What is the "Shot Window"?',
    options: ['The time between matches', 'The optimal time to release a shot (usually 5-10s)', 'A literal window on the range', 'The size of the target'],
    correctAnswer: 1,
    explanation: 'Releasing the shot within the peak stability window is crucial for accuracy.'
  },
  {
    id: 'q62',
    question: 'What is "Angular Error"?',
    options: ['A math mistake', 'Small misalignment at the pistol resulting in a large miss at the target', 'Tilting the pistol', 'Standing at the wrong angle'],
    correctAnswer: 1,
    explanation: 'Even a tiny misalignment of the sights is magnified over the 10-meter distance.'
  },
  {
    id: 'q63',
    question: 'Which is more critical for accuracy: Sight Alignment or Sight Picture?',
    options: ['Sight Alignment', 'Sight Picture', 'They are equally critical', 'Neither is important'],
    correctAnswer: 0,
    explanation: 'Perfect sight alignment with a slightly off-center sight picture will still result in a good hit.'
  },
  {
    id: 'q64',
    question: 'What is the purpose of a "Stepped" front sight?',
    options: ['To look cool', 'Reduces glare and provides a sharp edge', 'To measure distance', 'To add weight'],
    correctAnswer: 1,
    explanation: 'A sharp, glare-free front sight is essential for precise alignment.'
  },
  {
    id: 'q65',
    question: 'Why are some pellets "Match" grade?',
    options: ['They are cheaper', 'Higher consistency in weight and shape', 'They are faster', 'They are made of gold'],
    correctAnswer: 1,
    explanation: 'Match pellets are manufactured to extremely tight tolerances for maximum consistency.'
  },
  {
    id: 'q66',
    question: 'What is the benefit of a "Dry Fire" mechanism?',
    options: ['Saves pellets', 'Allows trigger practice without using air', 'Makes the pistol lighter', 'Increases power'],
    correctAnswer: 1,
    explanation: 'Dry fire allows for thousands of repetitions of trigger control without wear on the air system.'
  },
  {
    id: 'q67',
    question: 'What is a "Compensator" on an air pistol?',
    options: ['A weight', 'Reduces muzzle flip by venting air upwards', 'A sight adjustment tool', 'A grip extension'],
    correctAnswer: 1,
    explanation: 'Compensators help keep the muzzle still during the shot release.'
  },
  {
    id: 'q68',
    question: 'Why is the "Sight Radius" important?',
    options: ['It isn\'t', 'Longer radius allows for more precise alignment', 'Shorter radius is faster', 'It changes the pellet speed'],
    correctAnswer: 1,
    explanation: 'A longer distance between front and rear sights makes alignment errors more visible.'
  },
  {
    id: 'q69',
    question: 'What is the "Load" command?',
    options: ['Permission to pick up the pistol', 'Permission to insert a pellet', 'Permission to fire', 'Permission to leave the range'],
    correctAnswer: 1,
    explanation: '"LOAD" signifies that the range is ready for shooters to prepare their first shot.'
  },
  {
    id: 'q70',
    question: 'What is the "Start" command?',
    options: ['Permission to begin firing for score', 'Permission to enter the range', 'Permission to talk', 'Permission to clean the pistol'],
    correctAnswer: 0,
    explanation: '"START" begins the competition time for the match.'
  },
  {
    id: 'q71',
    question: 'How are ties broken in the qualification round?',
    options: ['Coin toss', 'Number of inner tens, then countback', 'Whoever fired faster', 'A shoot-off'],
    correctAnswer: 1,
    explanation: 'Inner tens (X) are the primary tie-breaker, followed by the score of the last 10-shot series.'
  },
  {
    id: 'q72',
    question: 'What is the "Finals" format for Olympic Air Pistol?',
    options: ['Top 20 shooters', 'Top 8 shooters, elimination format', 'Everyone shoots again', 'Highest score wins immediately'],
    correctAnswer: 1,
    explanation: 'The top 8 qualifiers enter a high-pressure elimination final to determine the medals.'
  },
  {
    id: 'q73',
    question: 'How does caffeine affect most shooters?',
    options: ['Improves focus', 'Increases heart rate and tremors', 'Makes them stronger', 'No effect'],
    correctAnswer: 1,
    explanation: 'Stimulants like caffeine can cause "the jitters," making a steady hold difficult.'
  },
  {
    id: 'q74',
    question: 'Why is "Eye Dominance" important?',
    options: ['Determines which eye should focus on the sights', 'Determines which hand to use', 'It isn\'t important', 'Changes the target color'],
    correctAnswer: 0,
    explanation: 'Using the dominant eye for sight alignment is more natural and less fatiguing.'
  },
  {
    id: 'q75',
    question: 'What should you do if your eyes get tired during a match?',
    options: ['Rub them hard', 'Look at a distant object or close them briefly', 'Keep pushing through', 'Change your glasses'],
    correctAnswer: 1,
    explanation: 'Resting the eyes by changing focus helps maintain visual acuity throughout the match.'
  },
  {
    id: 'q76',
    question: 'What is the "Natural Respiratory Pause"?',
    options: ['Holding your breath for a minute', 'The moment between exhaling and inhaling', 'Breathing very fast', 'Sneezing'],
    correctAnswer: 1,
    explanation: 'The natural pause after exhaling is the most stable time to execute a shot.'
  },
  {
    id: 'q77',
    question: 'Why is "Consistency" the most important word in shooting?',
    options: ['It sounds good', 'Repeating the same process leads to the same result', 'To follow the rules', 'To impress the coach'],
    correctAnswer: 1,
    explanation: 'Accuracy is simply the result of perfect, consistent repetition of the shot process.'
  },
  {
    id: 'q78',
    question: 'What is "Parallel Shift"?',
    options: ['Moving the whole pistol while keeping sights aligned', 'Changing lanes', 'Moving your feet', 'Adjusting the sights'],
    correctAnswer: 0,
    explanation: 'A parallel shift has a much smaller impact on accuracy than an angular alignment error.'
  },
  {
    id: 'q79',
    question: 'What happens if you fire before the "Start" command?',
    options: ['Nothing', 'Disqualification or penalty', 'You get a free shot', 'The RO laughs'],
    correctAnswer: 1,
    explanation: 'Firing before the official start is a serious rule violation.'
  },
  {
    id: 'q81',
    question: 'What should you do before moving your equipment to a firing point?',
    options: ['Just go whenever', 'Wait for the Range Officer\'s permission', 'Ask the person next to you', 'Run to get the best spot'],
    correctAnswer: 1,
    explanation: 'Range safety and organization depend on following the Range Officer\'s instructions.'
  },
  {
    id: 'q82',
    question: 'Is it acceptable to talk loudly behind the firing line?',
    options: ['Yes, it\'s a social event', 'No, it distracts shooters who are focusing', 'Only if you are winning', 'Only during the sighting period'],
    correctAnswer: 1,
    explanation: 'Maintaining a quiet environment is a matter of respect and sportsmanship.'
  },
  {
    id: 'q83',
    question: 'How should you treat other shooters\' equipment?',
    options: ['Feel free to try it out', 'Never touch it without explicit permission', 'Only if they aren\'t looking', 'Move it if it\'s in your way'],
    correctAnswer: 1,
    explanation: 'Respecting others\' gear is a fundamental rule of range etiquette.'
  },
  {
    id: 'q84',
    question: 'What is "Choking" in a competition?',
    options: ['A physical injury', 'Performance drop due to excessive pressure/anxiety', 'Firing too fast', 'Forgetting your pellets'],
    correctAnswer: 1,
    explanation: 'Choking is a mental failure to execute known skills under high-pressure conditions.'
  },
  {
    id: 'q85',
    question: 'How can deep breathing help during a match?',
    options: ['Makes you dizzy', 'Lowers heart rate and calms the mind', 'Increases power', 'It doesn\'t help'],
    correctAnswer: 1,
    explanation: 'Controlled breathing is a powerful tool for managing physiological stress.'
  },
  {
    id: 'q86',
    question: 'What is "Mindfulness" in shooting?',
    options: ['Thinking about your score', 'Being fully present and focused on the current shot', 'Worrying about the next match', 'Remembering your last mistake'],
    correctAnswer: 1,
    explanation: 'Mindfulness keeps the shooter focused on the process rather than distractions.'
  },
  {
    id: 'q87',
    question: 'How do you handle a distraction (like a loud noise)?',
    options: ['Fire quickly before the next one', 'Step back, reset your routine, and start over', 'Yell at the source of the noise', 'Ignore it and hope for the best'],
    correctAnswer: 1,
    explanation: 'Resetting your routine ensures the distraction doesn\'t compromise the shot execution.'
  },
  {
    id: 'q88',
    question: 'What is the "Flow State"?',
    options: ['A state of effortless focus and peak performance', 'Drinking water', 'Moving between firing points', 'The wind blowing'],
    correctAnswer: 0,
    explanation: 'Flow is the "zone" where the mind and body work in perfect, intuitive harmony.'
  },
  {
    id: 'q89',
    question: 'Why is stretching important after a shooting session?',
    options: ['To get taller', 'Reduces muscle tension and prevents stiffness', 'To fire better next time', 'It isn\'t important'],
    correctAnswer: 1,
    explanation: 'Shooting involves static muscle tension; stretching helps recovery and prevents injury.'
  },
  {
    id: 'q90',
    question: 'How does sleep affect shooting performance?',
    options: ['It doesn\'t', 'Essential for reaction time and cognitive focus', 'Makes you fire slower', 'Only matters for long matches'],
    correctAnswer: 1,
    explanation: 'Rest is critical for the fine motor control and mental clarity required for shooting.'
  },
  {
    id: 'q91',
    question: 'What is "Muscle Memory"?',
    options: ['Muscles getting bigger', 'Neural pathways that automate physical movements', 'Remembering to go to the gym', 'Pain in the muscles'],
    correctAnswer: 1,
    explanation: 'Consistent practice builds the "memory" that allows for intuitive execution.'
  },
  {
    id: 'q92',
    question: 'Why is it important to take breaks during long training sessions?',
    options: ['To check your phone', 'Prevents physical fatigue and mental burnout', 'To talk to others', 'To save air'],
    correctAnswer: 1,
    explanation: 'Quality of practice is more important than quantity; breaks maintain high focus levels.'
  },
  {
    id: 'q93',
    question: 'What is the "Ten-Ring"?',
    options: ['A piece of jewelry', 'The central scoring area of the target', 'The outer edge of the target', 'The 10th shot of a match'],
    correctAnswer: 1,
    explanation: 'The 10-ring is the ultimate goal for every competitive shot.'
  },
  {
    id: 'q94',
    question: 'What is a "Grouping"?',
    options: ['A team of shooters', 'A cluster of shots fired with the same aim point', 'A set of targets', 'A type of pistol'],
    correctAnswer: 1,
    explanation: 'The size and consistency of your grouping indicate your level of precision.'
  },
  {
    id: 'q95',
    question: 'What is "Zeroing" a pistol?',
    options: ['Cleaning it to zero dirt', 'Adjusting the sights so shots hit the point of aim', 'Resetting the score', 'Firing zero shots'],
    correctAnswer: 1,
    explanation: 'Zeroing ensures that your aligned sights correspond to where the pellet actually hits.'
  },
  {
    id: 'q96',
    question: 'What is "Windage"?',
    options: ['The wind blowing on the range', 'Horizontal sight adjustment', 'Vertical sight adjustment', 'The speed of the pellet'],
    correctAnswer: 1,
    explanation: 'Windage adjustments move the point of impact left or right.'
  },
  {
    id: 'q97',
    question: 'What is "Elevation"?',
    options: ['The height of the range', 'Vertical sight adjustment', 'Lifting the pistol', 'Winning a match'],
    correctAnswer: 1,
    explanation: 'Elevation adjustments move the point of impact up or down.'
  },
  {
    id: 'q98',
    question: 'What is the "Natural Point of Aim" (NPA) check?',
    options: ['Looking at the target', 'Closing eyes, relaxing, then checking sight alignment', 'Asking a coach', 'Using a laser'],
    correctAnswer: 1,
    explanation: 'The NPA check confirms that your body is naturally aligned with the target.'
  },
  {
    id: 'q99',
    question: 'What is the "Hold" in pistol shooting?',
    options: ['Holding the pistol in your bag', 'The ability to keep the pistol still in the aiming area', 'Holding the trigger', 'Holding your breath'],
    correctAnswer: 1,
    explanation: 'A steady hold is the foundation of a high-scoring shot.'
  },
  {
    id: 'q100',
    question: 'What is the most important factor in Olympic shooting?',
    options: ['Expensive equipment', 'Luck', 'Consistent execution of the basics', 'Firing as fast as possible'],
    correctAnswer: 2,
    explanation: 'Mastery of the fundamentals—stance, grip, sights, trigger—is the only path to success.'
  },
  {
    id: 'q101',
    question: 'What is the "Inner Bullseye" or "X" ring used for?',
    options: ['Double points', 'Tie-breaking in match scores', 'Target practice only', 'It has no purpose'],
    correctAnswer: 1,
    explanation: 'The number of inner tens is the primary tie-breaker in ISSF competitions.'
  },
  {
    id: 'q102',
    question: 'How long is the "Sighting" period in a standard 10m Air Pistol match?',
    options: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
    correctAnswer: 2,
    explanation: 'Shooters have 15 minutes for preparation and unlimited sighting shots.'
  },
  {
    id: 'q103',
    question: 'What is the maximum diameter of a 10m Air Pistol target 10-ring?',
    options: ['5.5 mm', '11.5 mm', '15.5 mm', '20.5 mm'],
    correctAnswer: 1,
    explanation: 'The 10-ring on a 10m Air Pistol target is exactly 11.5 mm in diameter.'
  },
  {
    id: 'q104',
    question: 'What is "Dry Firing"?',
    options: ['Firing without a pellet', 'Firing in the rain', 'Firing with a dirty pistol', 'Firing at a moving target'],
    correctAnswer: 0,
    explanation: 'Dry firing is practicing the shot process without actually discharging a projectile.'
  },
  {
    id: 'q105',
    question: 'Why is "Follow-through" critical in pistol shooting?',
    options: ['To look good for the camera', 'Ensures the pellet has left the barrel before the shooter moves', 'To save air', 'To see where the shot went'],
    correctAnswer: 1,
    explanation: 'Maintaining position for a second after the shot prevents movement from affecting the pellet\'s flight.'
  },
  {
    id: 'q106',
    question: 'What is the "Natural Point of Aim" (NPA)?',
    options: ['Where you want to hit', 'Where the pistol points when your body is relaxed', 'The center of the target', 'The highest point of your lift'],
    correctAnswer: 1,
    explanation: 'NPA is the alignment of your body and the pistol when no muscle tension is used to steer the gun.'
  },
  {
    id: 'q107',
    question: 'How should you adjust your horizontal NPA?',
    options: ['Move your arm', 'Twist your waist', 'Move your feet', 'Adjust the sights'],
    correctAnswer: 2,
    explanation: 'Always move your feet to adjust horizontal NPA to avoid introducing muscle tension.'
  },
  {
    id: 'q108',
    question: 'What is the "Stability Window"?',
    options: ['A literal window', 'The 5-8 second period where your hold is most steady', 'The time between matches', 'The size of the 10-ring'],
    correctAnswer: 1,
    explanation: 'The stability window is the peak period of stillness before fatigue or oxygen debt begins.'
  },
  {
    id: 'q109',
    question: 'What is "Area Aiming"?',
    options: ['Aiming at the whole target', 'Accepting a natural wobble within a defined area', 'Aiming at the white part of the target', 'Closing both eyes'],
    correctAnswer: 1,
    explanation: 'Area aiming is the mental acceptance of your natural wobble while focusing on trigger execution.'
  },
  {
    id: 'q110',
    question: 'What is "Milking the Grip"?',
    options: ['Cleaning the grip', 'Changing grip pressure during the trigger pull', 'Oiling the pistol', 'Holding the pistol too low'],
    correctAnswer: 1,
    explanation: 'Milking is the error of squeezing the other fingers while pulling the trigger, moving the sights.'
  },
  {
    id: 'q111',
    question: 'What is the "Surprise Break"?',
    options: ['The pistol breaking', 'The shot firing without the shooter knowing the exact millisecond', 'A loud noise', 'Missing the target'],
    correctAnswer: 1,
    explanation: 'A surprise break prevents the shooter from flinching or jerking in anticipation of the shot.'
  },
  {
    id: 'q112',
    question: 'What is "Calling the Shot"?',
    options: ['Yelling your score', 'Predicting where the shot hit based on the sight picture at the break', 'Naming your pistol', 'Telling the RO you are ready'],
    correctAnswer: 1,
    explanation: 'Calling the shot is a vital feedback tool to confirm your awareness of the sights at the moment of discharge.'
  },
  {
    id: 'q113',
    question: 'What is the "Trigger Reset"?',
    options: ['Turning the pistol off', 'Allowing the trigger to move forward to re-engage the sear', 'Adjusting trigger weight', 'Cleaning the trigger'],
    correctAnswer: 1,
    explanation: 'Proper trigger reset is essential for consistent follow-up shots in rapid-fire events.'
  },
  {
    id: 'q114',
    question: 'What is "Sight Alignment"?',
    options: ['Sights on the target', 'Relationship between the front and rear sights', 'Closing one eye', 'Focusing on the target'],
    correctAnswer: 1,
    explanation: 'Sight alignment is the precise centering of the front sight in the rear sight notch.'
  },
  {
    id: 'q115',
    question: 'What is "Sight Picture"?',
    options: ['A photo of your sights', 'Relationship between aligned sights and the target', 'The target itself', 'The rear sight only'],
    correctAnswer: 1,
    explanation: 'Sight picture is how the aligned sights look when placed in the aiming area on the target.'
  },
  {
    id: 'q116',
    question: 'Which is more important: Sight Alignment or Sight Picture?',
    options: ['Sight Alignment', 'Sight Picture', 'They are equally important', 'Neither'],
    correctAnswer: 0,
    explanation: 'Perfect sight alignment with a slightly off-center sight picture will still result in a good hit.'
  },
  {
    id: 'q117',
    question: 'What is "Angular Error"?',
    options: ['A math mistake', 'Small misalignment at the pistol resulting in a large miss at the target', 'Tilting the pistol', 'Standing at the wrong angle'],
    correctAnswer: 1,
    explanation: 'Even a tiny misalignment of the sights is magnified over the 10-meter distance.'
  },
  {
    id: 'q118',
    question: 'What is "Parallel Shift"?',
    options: ['Moving the whole pistol while keeping sights aligned', 'Changing lanes', 'Moving your feet', 'Adjusting the sights'],
    correctAnswer: 0,
    explanation: 'A parallel shift has a much smaller impact on accuracy than an angular alignment error.'
  },
  {
    id: 'q119',
    question: 'What is "Canting"?',
    options: ['Cleaning the pistol', 'Tilting the pistol to the left or right', 'Dropping the pistol', 'Adjusting the trigger'],
    correctAnswer: 1,
    explanation: 'Canting changes the relationship between the sights and the bore, affecting the point of impact.'
  },
  {
    id: 'q120',
    question: 'What is the "Natural Respiratory Pause"?',
    options: ['Holding your breath for a minute', 'The moment between exhaling and inhaling', 'Breathing very fast', 'Sneezing'],
    correctAnswer: 1,
    explanation: 'The natural pause after exhaling is the most stable time to execute a shot.'
  },
  {
    id: 'q121',
    question: 'How should you breathe during the shot process?',
    options: ['Hold your breath from the start', 'Deep breath, exhale halfway, then hold during execution', 'Breathe normally', 'Fast, shallow breaths'],
    correctAnswer: 1,
    explanation: 'Exhaling halfway and holding provides stability without causing oxygen debt too quickly.'
  },
  {
    id: 'q122',
    question: 'What is "Trigger Freeze"?',
    options: ['The trigger getting cold', 'Inability to pull the trigger due to anxiety or over-focus', 'A broken trigger', 'Firing too many shots'],
    correctAnswer: 1,
    explanation: 'Trigger freeze is a mental block where the shooter cannot initiate the trigger pull despite wanting to.'
  },
  {
    id: 'q123',
    question: 'What is "Positive Self-Talk"?',
    options: ['Talking to your pistol', 'Using encouraging phrases to build confidence', 'Yelling at the target', 'Singing during the match'],
    correctAnswer: 1,
    explanation: 'Positive self-talk helps maintain a constructive and confident mindset under pressure.'
  },
  {
    id: 'q124',
    question: 'What is "Process over Outcome"?',
    options: ['Focusing on the score', 'Focusing on the steps of the shot rather than the result', 'Ignoring the rules', 'Thinking about the trophy'],
    correctAnswer: 1,
    explanation: 'Focusing on the execution process leads to better results than worrying about the score.'
  },
  {
    id: 'q125',
    question: 'What is "Visualization"?',
    options: ['Watching TV', 'Mentally rehearsing a perfect shot', 'Looking at the target', 'Dreaming about winning'],
    correctAnswer: 1,
    explanation: 'Mental rehearsal reinforces the correct neural pathways for successful execution.'
  },
  {
    id: 'q126',
    question: 'How do you handle a "Flyer"?',
    options: ['Get angry', 'Analyze the cause, then let it go', 'Quit the match', 'Change your sights immediately'],
    correctAnswer: 1,
    explanation: 'Analyze the error to learn from it, then clear your mind for the next shot.'
  },
  {
    id: 'q127',
    question: 'What is the "Shot Routine"?',
    options: ['Cleaning the pistol', 'A consistent sequence of steps for every shot', 'A workout plan', 'The score sheet'],
    correctAnswer: 1,
    explanation: 'A solid routine automates the shot process and helps manage competition pressure.'
  },
  {
    id: 'q128',
    question: 'What is the "Mindfulness" in shooting?',
    options: ['Thinking about your score', 'Being fully present and focused on the current shot', 'Worrying about the next match', 'Remembering your last mistake'],
    correctAnswer: 1,
    explanation: 'Mindfulness keeps the shooter focused on the process rather than distractions.'
  },
  {
    id: 'q129',
    question: 'What is the "Flow State"?',
    options: ['A state of effortless focus and peak performance', 'Drinking water', 'Moving between firing points', 'The wind blowing'],
    correctAnswer: 0,
    explanation: 'Flow is the "zone" where the mind and body work in perfect, intuitive harmony.'
  },
  {
    id: 'q130',
    question: 'How does hydration affect shooting?',
    options: ['It doesn\'t', 'Improves focus and reduces tremors', 'Makes you fire faster', 'Changes the sight alignment'],
    correctAnswer: 1,
    explanation: 'Dehydration can lead to loss of concentration and increased muscle tremors.'
  },
  {
    id: 'q131',
    question: 'How does caffeine affect most shooters?',
    options: ['Improves focus', 'Increases heart rate and tremors', 'Makes them stronger', 'No effect'],
    correctAnswer: 1,
    explanation: 'Stimulants like caffeine can cause "the jitters," making a steady hold difficult.'
  },
  {
    id: 'q132',
    question: 'Why is core strength important for shooters?',
    options: ['To look good', 'Maintains posture and reduces body sway', 'To lift heavy weights', 'To breathe faster'],
    correctAnswer: 1,
    explanation: 'A strong core provides a stable foundation for the entire shooting platform.'
  },
  {
    id: 'q133',
    question: 'What is the benefit of cardiovascular exercise?',
    options: ['Lower resting heart rate', 'Bigger muscles', 'Faster running', 'Better hearing'],
    correctAnswer: 0,
    explanation: 'A lower heart rate means less movement transmitted to the pistol between beats.'
  },
  {
    id: 'q134',
    question: 'Why is stretching important?',
    options: ['To get taller', 'Reduces muscle tension and prevents stiffness', 'To fire better next time', 'It isn\'t important'],
    correctAnswer: 1,
    explanation: 'Shooting involves static muscle tension; stretching helps recovery and prevents injury.'
  },
  {
    id: 'q135',
    question: 'What is the "Hold Endurance" training?',
    options: ['Holding the pistol for 5 seconds', 'Holding the pistol for longer than a shot duration', 'Holding the pistol with two hands', 'Holding the pistol while running'],
    correctAnswer: 1,
    explanation: 'Hold endurance builds the specific strength needed to maintain stability throughout a long match.'
  },
  {
    id: 'q136',
    question: 'What is the "1.5x Rule" in training?',
    options: ['Training for 1.5 hours', 'Holding for 1.5x the duration of a normal shot', 'Firing 1.5x more pellets', 'Using a 1.5x heavier pistol'],
    correctAnswer: 1,
    explanation: 'Training to hold for 25-30 seconds ensures you never hit fatigue during a normal 10-15 second shot.'
  },
  {
    id: 'q137',
    question: 'What is the maximum weight for an Olympic Air Pistol?',
    options: ['1.0 kg', '1.5 kg', '2.0 kg', 'No limit'],
    correctAnswer: 1,
    explanation: 'ISSF rules limit the total weight of the pistol to 1.5 kg.'
  },
  {
    id: 'q138',
    question: 'What is the minimum trigger weight for Air Pistol?',
    options: ['250 grams', '500 grams', '1000 grams', 'No limit'],
    correctAnswer: 1,
    explanation: 'Olympic rules require a minimum of 500 grams for safety and consistency.'
  },
  {
    id: 'q139',
    question: 'What is the standard distance for Air Pistol?',
    options: ['5 meters', '10 meters', '25 meters', '50 meters'],
    correctAnswer: 1,
    explanation: '10 meters is the international standard for Olympic Air Pistol.'
  },
  {
    id: 'q140',
    question: 'What caliber is used in standard Air Pistol?',
    options: ['.22', '.177 (4.5mm)', '9mm', '.38'],
    correctAnswer: 1,
    explanation: '.177 caliber (4.5mm) lead pellets are the standard for competition.'
  },
  {
    id: 'q141',
    question: 'How many shots are in a standard qualification match?',
    options: ['30 shots', '40 shots', '60 shots', '100 shots'],
    correctAnswer: 2,
    explanation: 'Both Men\'s and Women\'s matches now consist of 60 shots in the qualification round.'
  },
  {
    id: 'q142',
    question: 'What is the time limit for a 60-shot match (electronic targets)?',
    options: ['60 minutes', '75 minutes', '90 minutes', '120 minutes'],
    correctAnswer: 1,
    explanation: '75 minutes is the standard ISSF time limit for 60 shots on electronic targets.'
  },
  {
    id: 'q143',
    question: 'What is the highest score possible for a single shot (decimal)?',
    options: ['10', '10.9', '11', '10.5'],
    correctAnswer: 1,
    explanation: 'On electronic targets, shots are scored to one decimal place, with 10.9 being a perfect center hit.'
  },
  {
    id: 'q144',
    question: 'What happens if you fire before the "Start" command?',
    options: ['Nothing', 'Disqualification or penalty', 'You get a free shot', 'The RO laughs'],
    correctAnswer: 1,
    explanation: 'Firing before the official start is a serious rule violation.'
  },
  {
    id: 'q145',
    question: 'What is the "Load" command?',
    options: ['Permission to pick up the pistol', 'Permission to insert a pellet', 'Permission to fire', 'Permission to leave the range'],
    correctAnswer: 1,
    explanation: '"LOAD" signifies that the range is ready for shooters to prepare their first shot.'
  },
  {
    id: 'q146',
    question: 'What is the "Cease Fire" command?',
    options: ['Stop firing immediately', 'Start firing', 'Clean your pistol', 'Change targets'],
    correctAnswer: 0,
    explanation: '"CEASE FIRE" is the universal command to stop all activity on the range immediately.'
  },
  {
    id: 'q147',
    question: 'What is a "Safety Flag" (CBI)?',
    options: ['A flag on the range', 'A visual indicator that the chamber is empty', 'A team flag', 'A target marker'],
    correctAnswer: 1,
    explanation: 'A Clear Barrel Indicator (CBI) provides a visual confirmation that the pistol is in a safe state.'
  },
  {
    id: 'q148',
    question: 'Where should the muzzle ALWAYS be pointed?',
    options: ['At the floor', 'At the ceiling', 'Downrange or in a safe direction', 'At your feet'],
    correctAnswer: 2,
    explanation: 'Muzzle awareness is the most fundamental rule of firearm safety.'
  },
  {
    id: 'q149',
    question: 'Can you handle a pistol when someone is downrange?',
    options: ['Yes, if it\'s unloaded', 'Yes, if the action is open', 'No, never', 'Only if the RO says so'],
    correctAnswer: 2,
    explanation: 'Handling any firearm while people are downrange is strictly prohibited.'
  },
  {
    id: 'q150',
    question: 'What is the first thing you do when picking up a pistol?',
    options: ['Check the sights', 'Verify it is unloaded and the action is open', 'Dry fire it', 'Point it at the target'],
    correctAnswer: 1,
    explanation: 'Always verify the safety status of any firearm immediately upon handling it.'
  },
  {
    id: 'q151',
    question: 'What is "Proprioception" in shooting?',
    options: ['A type of pellet', 'The body\'s ability to sense its position and movement', 'A sight adjustment', 'The speed of the trigger pull'],
    correctAnswer: 1,
    explanation: 'Proprioception helps you maintain a consistent stance and grip without looking.'
  },
  {
    id: 'q152',
    question: 'What is the "Balance of the Pistol"?',
    options: ['The weight of the pistol', 'The distribution of weight relative to the hand', 'The cost of the pistol', 'The color of the pistol'],
    correctAnswer: 1,
    explanation: 'A well-balanced pistol feels stable and reduces the effort needed to keep the sights aligned.'
  },
  {
    id: 'q153',
    question: 'What are "Counterweights"?',
    options: ['Weights used to balance the pistol', 'Weights used for exercise', 'The weight of the pellets', 'The weight of the air cylinder'],
    correctAnswer: 0,
    explanation: 'Counterweights allow shooters to customize the balance and stability of their pistol.'
  },
  {
    id: 'q154',
    question: 'What is "Barrel Time"?',
    options: ['How long it takes to clean the barrel', 'The time the pellet spends inside the barrel after ignition', 'The age of the pistol', 'The length of the barrel'],
    correctAnswer: 1,
    explanation: 'A shorter barrel time reduces the chance of shooter movement affecting the shot.'
  },
  {
    id: 'q155',
    question: 'What is "Muzzle Jump"?',
    options: ['The pistol jumping out of your hand', 'The upward movement of the muzzle during the shot', 'Lifting the pistol too fast', 'Dropping the pistol'],
    correctAnswer: 1,
    explanation: 'Even in air pistols, there is a tiny amount of muzzle movement that must be managed with follow-through.'
  },
  {
    id: 'q156',
    question: 'What is "Lock Time"?',
    options: ['The time it takes to lock the pistol case', 'The interval between trigger release and the pellet starting to move', 'The duration of the match', 'The time spent in the aiming area'],
    correctAnswer: 1,
    explanation: 'A faster lock time minimizes the window for errors during the mechanical execution of the shot.'
  },
  {
    id: 'q157',
    question: 'What is "Pellet Sizing"?',
    options: ['Measuring the weight of pellets', 'Using pellets with slightly different head diameters (e.g., 4.49mm vs 4.50mm)', 'Counting pellets', 'Cleaning pellets'],
    correctAnswer: 1,
    explanation: 'Different barrels perform better with specific pellet head sizes for maximum accuracy.'
  },
  {
    id: 'q158',
    question: 'What is a "Pellet Batch Test"?',
    options: ['Testing a single pellet', 'Testing different production batches of pellets to find the most accurate one for a specific barrel', 'Checking for damaged pellets', 'Weighing a box of pellets'],
    correctAnswer: 1,
    explanation: 'Top shooters test their pistols in a vice with different pellet batches to find the perfect match.'
  },
  {
    id: 'q159',
    question: 'What is "Skirt Deformation"?',
    options: ['A fashion mistake', 'Damage to the hollow base of the pellet that affects flight stability', 'The pellet melting', 'The pellet being too long'],
    correctAnswer: 1,
    explanation: 'Always handle pellets carefully; a deformed skirt will cause the pellet to fly inconsistently.'
  },
  {
    id: 'q160',
    question: 'What is the "O-Ring" in an air pistol?',
    options: ['A piece of jewelry', 'A rubber seal that prevents air leaks', 'The trigger guard', 'The sights'],
    correctAnswer: 1,
    explanation: 'Maintaining O-rings is essential for consistent air pressure and velocity.'
  },
  {
    id: 'q161',
    question: 'How often should you lubricate your air pistol?',
    options: ['Every day', 'Never', 'According to the manufacturer\'s instructions (usually sparingly)', 'Every shot'],
    correctAnswer: 2,
    explanation: 'Over-lubrication can be as harmful as under-lubrication; follow the manual.'
  },
  {
    id: 'q162',
    question: 'What is "Velocity Consistency"?',
    options: ['Firing pellets at the same speed', 'Firing pellets as fast as possible', 'The speed of the trigger pull', 'The time between shots'],
    correctAnswer: 0,
    explanation: 'Consistent velocity is required for consistent vertical placement of shots.'
  },
  {
    id: 'q163',
    question: 'What is a "Chronograph" used for?',
    options: ['Measuring time', 'Measuring the velocity of the pellet', 'Measuring the weight of the pistol', 'Measuring the score'],
    correctAnswer: 1,
    explanation: 'A chronograph verifies that your pistol is firing at the correct and consistent speed.'
  },
  {
    id: 'q164',
    question: 'What is the "Dry-Fire Switch"?',
    options: ['A switch to turn off the lights', 'A mechanical setting that allows trigger practice without releasing air', 'A type of trigger', 'A safety lock'],
    correctAnswer: 1,
    explanation: 'Most modern match pistols have a dedicated dry-fire mode for safe practice.'
  },
  {
    id: 'q165',
    question: 'What is the "Raking" of the grip?',
    options: ['Cleaning the grip with a rake', 'Adjusting the angle of the grip relative to the barrel', 'Sanding the grip', 'Holding the grip too tight'],
    correctAnswer: 1,
    explanation: 'Adjusting the grip rake helps align the sights naturally with your wrist position.'
  },
  {
    id: 'q166',
    question: 'What is "Anatomical Grip"?',
    options: ['A grip made of bone', 'A grip shaped specifically to fit the shooter\'s hand', 'A standard plastic grip', 'A grip with no shape'],
    correctAnswer: 1,
    explanation: 'An anatomical grip provides maximum contact area and consistent hand placement.'
  },
  {
    id: 'q167',
    question: 'What is "Puttying" a grip?',
    options: ['Cleaning it with putty', 'Using wood filler or putty to customize the grip shape', 'Painting the grip', 'Throwing the grip away'],
    correctAnswer: 1,
    explanation: 'Customizing the grip with putty ensures it fits your hand perfectly, reducing tension.'
  },
  {
    id: 'q168',
    question: 'What is the "Sight Radius"?',
    options: ['The distance from the sights to the target', 'The distance between the front and rear sights', 'The size of the rear sight notch', 'The height of the front sight'],
    correctAnswer: 1,
    explanation: 'A longer sight radius allows for more precise alignment and easier detection of errors.'
  },
  {
    id: 'q169',
    question: 'What is the "Rear Sight Notch Width"?',
    options: ['The height of the rear sight', 'The width of the gap in the rear sight', 'The thickness of the front sight', 'The distance to the target'],
    correctAnswer: 1,
    explanation: 'Adjusting the notch width changes the amount of "light" visible on either side of the front sight.'
  },
  {
    id: 'q170',
    question: 'What is "Light Gap" in sight alignment?',
    options: ['A gap in the range roof', 'The equal bars of light on either side of the front sight in the rear notch', 'The sun shining on the target', 'Focusing on the light'],
    correctAnswer: 1,
    explanation: 'Equal light gaps are the primary indicator of correct horizontal sight alignment.'
  },
  {
    id: 'q171',
    question: 'What is "Sub-Six" aiming?',
    options: ['Aiming at the number 6', 'Aiming below the black bullseye with a gap of white', 'Aiming at the bottom of the target', 'Aiming with six eyes'],
    correctAnswer: 1,
    explanation: 'Sub-six aiming provides a clear contrast between the dark sights and the white target background.'
  },
  {
    id: 'q172',
    question: 'What is "Center-to-Center" measurement?',
    options: ['Measuring from the edge of shots', 'Measuring from the center of one shot hole to another', 'Measuring the target size', 'Measuring the distance to the range'],
    correctAnswer: 1,
    explanation: 'Center-to-center is the standard way to measure the size of a shot group.'
  },
  {
    id: 'q173',
    question: 'What is a "Double" in shooting?',
    options: ['Two shots in the same hole', 'Firing two shots at once', 'Winning two matches', 'Two pistols'],
    correctAnswer: 0,
    explanation: 'A "double" is when a second shot passes through the hole of a previous shot.'
  },
  {
    id: 'q174',
    question: 'What is "Scoring Gauges"?',
    options: ['Tools used to measure the score', 'Precision plugs used to determine if a shot touched a higher scoring ring', 'The score sheet', 'The target frame'],
    correctAnswer: 1,
    explanation: 'Gauges ensure fair and accurate scoring when a shot is on the line between two rings.'
  },
  {
    id: 'q175',
    question: 'What is the "Finals Hall"?',
    options: ['The hallway to the range', 'A dedicated range for the top 8 shooters to compete for medals', 'The cafeteria', 'The equipment room'],
    correctAnswer: 1,
    explanation: 'The Finals Hall is where the most intense and high-pressure part of a competition takes place.'
  },
  {
    id: 'q176',
    question: 'What is "Music in Finals"?',
    options: ['Shooters singing', 'Loud music played during the final to add pressure and atmosphere', 'The sound of the pistols', 'A distraction to be ignored'],
    correctAnswer: 1,
    explanation: 'Music is used in ISSF finals to make the environment more dynamic and challenging.'
  },
  {
    id: 'q177',
    question: 'What is the "Reporting Time"?',
    options: ['The time you finish', 'The deadline for shooters to check in before a match', 'The time you tell your score', 'The time the news arrives'],
    correctAnswer: 1,
    explanation: 'Missing reporting time can lead to penalties or disqualification.'
  },
  {
    id: 'q178',
    question: 'What is "Equipment Control"?',
    options: ['Holding your pistol', 'The official check to ensure all equipment meets ISSF rules', 'Cleaning your gear', 'Buying new gear'],
    correctAnswer: 1,
    explanation: 'Every piece of competition gear must be inspected and approved by officials.'
  },
  {
    id: 'q179',
    question: 'What is a "Shooting Diary"?',
    options: ['A book about shooting', 'A personal record of training, matches, and feelings', 'A list of scores', 'A calendar'],
    correctAnswer: 1,
    explanation: 'A diary is an essential tool for tracking progress and identifying patterns in your performance.'
  },
  {
    id: 'q180',
    question: 'What is "Match Temperament"?',
    options: ['Getting angry during a match', 'The ability to stay calm and focused under competition pressure', 'The temperature of the range', 'The speed of firing'],
    correctAnswer: 1,
    explanation: 'Developing a strong match temperament is as important as technical skill.'
  },
  {
    id: 'q181',
    question: 'What is "Self-Correction"?',
    options: ['Fixing your own pistol', 'Identifying and fixing your own technical errors during a match', 'Changing your own score', 'Arguing with the RO'],
    correctAnswer: 1,
    explanation: 'The best shooters can diagnose and correct their own mistakes in real-time.'
  },
  {
    id: 'q182',
    question: 'What is "Competitive Anxiety"?',
    options: ['Being excited', 'Nervousness that can negatively affect performance', 'Wanting to win too much', 'Fear of the pistol'],
    correctAnswer: 1,
    explanation: 'Learning to manage anxiety is a key part of mental training for athletes.'
  },
  {
    id: 'q183',
    question: 'What is "Arousal Level"?',
    options: ['Waking up', 'The state of physiological and psychological readiness', 'Being angry', 'Being bored'],
    correctAnswer: 1,
    explanation: 'Finding your "Optimal Arousal Level" is key to peak performance—not too relaxed, not too tense.'
  },
  {
    id: 'q184',
    question: 'What is "External Focus"?',
    options: ['Looking outside', 'Focusing on something outside the body (like the front sight)', 'Thinking about the crowd', 'Watching other shooters'],
    correctAnswer: 1,
    explanation: 'An external focus of attention often leads to more automatic and accurate movements.'
  },
  {
    id: 'q185',
    question: 'What is "Internal Focus"?',
    options: ['Thinking about your lunch', 'Focusing on body movements or muscle tension', 'Closing your eyes', 'Thinking about the score'],
    correctAnswer: 1,
    explanation: 'Too much internal focus can interfere with the natural, automatic execution of the shot.'
  },
  {
    id: 'q186',
    question: 'What is "Sportsmanship" in shooting?',
    options: ['Winning at all costs', 'Respecting opponents, officials, and the rules', 'Being the best shooter', 'Having the best gear'],
    correctAnswer: 1,
    explanation: 'Integrity and respect are core values of the international shooting community.'
  },
  {
    id: 'q187',
    question: 'What is the "Jury" in a competition?',
    options: ['The people watching', 'Officials who resolve disputes and ensure rules are followed', 'The other shooters', 'The target markers'],
    correctAnswer: 1,
    explanation: 'The Jury is the final authority on rule interpretations during a match.'
  },
  {
    id: 'q188',
    question: 'What is a "Protest"?',
    options: ['Yelling at the RO', 'A formal challenge to a score or a rule decision', 'Quitting the match', 'Changing your target'],
    correctAnswer: 1,
    explanation: 'Protests must be made according to specific rules and often require a fee.'
  },
  {
    id: 'q189',
    question: 'What is "Range Etiquette"?',
    options: ['Wearing a suit', 'The unwritten rules of polite behavior on the firing line', 'The official rules', 'Cleaning the range'],
    correctAnswer: 1,
    explanation: 'Good etiquette, like being quiet while others are shooting, ensures a fair environment for everyone.'
  },
  {
    id: 'q190',
    question: 'What is "Cross-Firing"?',
    options: ['Firing two shots fast', 'Accidentally firing at another shooter\'s target', 'Firing while angry', 'Firing from the wrong position'],
    correctAnswer: 1,
    explanation: 'Cross-firing results in a zero for that shot and is a common beginner mistake.'
  },
  {
    id: 'q191',
    question: 'What is "Lead Fouling"?',
    options: ['Dirty pellets', 'The buildup of lead residue inside the barrel', 'Lead poisoning', 'Heavy pellets'],
    correctAnswer: 1,
    explanation: 'Occasional cleaning is needed to remove lead buildup and maintain accuracy.'
  },
  {
    id: 'q192',
    question: 'What is "Dry-Fire Fatigue"?',
    options: ['Getting bored', 'Muscle tiredness from repeated dry-fire practice', 'The pistol breaking', 'Running out of air'],
    correctAnswer: 1,
    explanation: 'Dry-fire is intense; don\'t overdo it and risk developing bad habits due to fatigue.'
  },
  {
    id: 'q193',
    question: 'What is "Target Panic"?',
    options: ['Fear of the target', 'Anxiety that causes a shooter to jerk the trigger as soon as the sights hit the bullseye', 'Missing the target', 'The target moving'],
    correctAnswer: 1,
    explanation: 'Target panic is a common psychological issue that requires specific training to overcome.'
  },
  {
    id: 'q194',
    question: 'What is "Over-Aiming"?',
    options: ['Aiming for too long', 'Trying to make the sight picture too perfect, leading to tension and errors', 'Aiming at the wrong target', 'Using a telescope'],
    correctAnswer: 1,
    explanation: 'Over-aiming often leads to trigger freeze or a poor shot as stability degrades.'
  },
  {
    id: 'q195',
    question: 'What is "Recoil Management"?',
    options: ['Stopping the pistol from moving', 'Allowing the pistol to move naturally and consistently after the shot', 'Holding the pistol tighter', 'Using a heavier pellet'],
    correctAnswer: 1,
    explanation: 'Consistent recoil (even the tiny bit in air pistol) is key to consistent results.'
  },
  {
    id: 'q196',
    question: 'What is "Pellet Seating"?',
    options: ['Sitting on pellets', 'Ensuring the pellet is pushed consistently into the breech', 'Putting pellets in a box', 'Cleaning the breech'],
    correctAnswer: 1,
    explanation: 'Consistent seating depth helps ensure consistent initial velocity.'
  },
  {
    id: 'q197',
    question: 'What is "Air Cylinder Expiry"?',
    options: ['Running out of air', 'The date after which a high-pressure cylinder is no longer legal or safe to use', 'The pistol breaking', 'The match ending'],
    correctAnswer: 1,
    explanation: 'Air cylinders must be replaced or re-tested every 10 years for safety.'
  },
  {
    id: 'q198',
    question: 'What is the "Shooting Box"?',
    options: ['A box to sit on', 'The container for all your match gear', 'The firing point', 'The target box'],
    correctAnswer: 1,
    explanation: 'A well-organized shooting box helps you stay focused and efficient during a match.'
  },
  {
    id: 'q199',
    question: 'What is "Junior" category age limit (ISSF)?',
    options: ['Under 16', 'Under 18', 'Under 21', 'Under 25'],
    correctAnswer: 2,
    explanation: 'In ISSF competition, athletes are considered Juniors until the end of the year they turn 21.'
  },
  {
    id: 'q200',
    question: 'What is the ultimate goal of shooting training?',
    options: ['To win medals', 'To achieve perfect, repeatable execution of the fundamentals', 'To have the best gear', 'To fire the most shots'],
    correctAnswer: 1,
    explanation: 'Medals are the result; perfect execution is the goal.'
  },
  {
    id: 'q201',
    question: 'When should you take your two deep breaths in the shot cycle?',
    options: ['Before picking up the pistol', 'While lifting the pistol to the target', 'After the shot breaks', 'During the trigger pull'],
    correctAnswer: 1,
    explanation: 'Deep breaths during the lift help oxygenate the blood and stabilize the core before the hold.'
  },
  {
    id: 'q202',
    question: 'What is the primary goal of a "Surprise Break"?',
    options: ['To scare the shooter', 'To prevent flinching or jerking the trigger', 'To make the shot louder', 'To save air'],
    correctAnswer: 1,
    explanation: 'A surprise break ensures that the shooter does not anticipate the shot and introduce movement.'
  },
  {
    id: 'q203',
    question: 'How long should you maintain your focus on the front sight AFTER the shot breaks (Follow-through)?',
    options: ['0 seconds', 'At least 1-2 seconds', 'Until you hear the pellet hit', 'Until you lower the pistol'],
    correctAnswer: 1,
    explanation: 'Follow-through ensures the shot is fully executed and provides critical feedback on the sight position at the break.'
  },
  {
    id: 'q204',
    question: 'According to many top coaches, what percentage of competitive shooting is mental?',
    options: ['10%', '50%', '90%', '100%'],
    correctAnswer: 2,
    explanation: 'Once the technical basics are mastered, the mental game becomes the deciding factor in competition.'
  },
  {
    id: 'q205',
    question: 'What is the recommended frequency for dry fire practice?',
    options: ['Once a month', 'Once a week', 'Daily (15-20 minutes)', 'Only before a match'],
    correctAnswer: 2,
    explanation: 'Short, daily dry fire sessions are more effective for building muscle memory than infrequent long sessions.'
  },
  {
    id: 'q206',
    question: 'What is the primary purpose of "prepping" the trigger during the settling phase?',
    options: ['To fire faster', 'To remove the slack and reach the second stage', 'To test if the pistol is loaded', 'To warm up the finger'],
    correctAnswer: 1,
    explanation: 'Prepping the trigger to the second stage while settling into the aiming area allows for a more controlled and precise final release.'
  },
  {
    id: 'q207',
    question: 'When using visualization, what is the most effective perspective to imagine?',
    options: ['Watching yourself from behind', 'Seeing the sights and target from your own eyes (first-person)', 'Looking at the scoreboard', 'Watching the audience'],
    correctAnswer: 1,
    explanation: 'First-person visualization (internal perspective) more effectively reinforces the neural pathways used during actual execution.'
  },
  {
    id: 'q208',
    question: 'In air pistol shooting, why is "recoil management" still important despite the low power?',
    options: ['To prevent the pistol from flying away', 'To ensure the pellet clears the barrel before the pistol moves', 'To look like a centerfire shooter', 'To save air'],
    correctAnswer: 1,
    explanation: 'Even the small movement of an air pistol can affect the shot if the shooter anticipates or reacts before the pellet has left the barrel.'
  },
  {
    id: 'q209',
    question: 'What should a shooter do immediately after a poor shot during a match?',
    options: ['Analyze the mistake for 5 minutes', 'Immediately fire the next shot to fix it', 'Execute a physical and mental reset routine', 'Check the leaderboard'],
    correctAnswer: 2,
    explanation: 'A reset routine (like a deep breath or a specific movement) helps clear the mind and prevents a "cascade" of poor shots.'
  },
  {
    id: 'q210',
    question: 'What is "accommodation" in the context of shooting vision?',
    options: ['Finding a place to stay', 'The eye\'s ability to change focus between different distances', 'Closing one eye', 'Wearing glasses'],
    correctAnswer: 1,
    explanation: 'Accommodation is the physiological process of the eye changing focus. In shooting, we must consciously prevent the eye from accommodating to the target.'
  },
  {
    id: 'q211',
    question: 'How should a shooter interpret the physical symptoms of "match nerves" (e.g., elevated heart rate)?',
    options: ['As a sign of failure', 'As the body preparing for peak performance (arousal)', 'As a reason to quit', 'As a medical emergency'],
    correctAnswer: 1,
    explanation: 'Reframing anxiety as "readiness" or "excitement" can help a shooter use that energy constructively rather than fighting it.'
  },
  {
    id: 'q212',
    question: 'Why is the "Sub-Six" (area) hold preferred over a "Center" hold in precision pistol?',
    options: ['It\'s easier to hit the bottom of the target', 'It provides better contrast between the black sights and the white target area', 'It\'s a requirement in the rules', 'To avoid hitting the center'],
    correctAnswer: 1,
    explanation: 'A sub-six hold creates a clear "line of white" which makes it much easier for the eye to detect small alignment errors.'
  },
  {
    id: 'q213',
    question: 'Which type of goal is most effective for improving performance during a match?',
    options: ['Outcome goals (e.g., "I want to score 570")', 'Process goals (e.g., "I will focus on a smooth trigger press")', 'Comparison goals (e.g., "I want to beat my rival")', 'Financial goals'],
    correctAnswer: 1,
    explanation: 'Process goals are within the shooter\'s direct control, which reduces anxiety and improves execution.'
  },
  {
    id: 'q214',
    question: 'What is the "Wrist Lock" and why is it essential?',
    options: ['A mechanical device on the pistol', 'Maintaining a rigid, consistent wrist angle throughout the shot', 'Holding the pistol with two hands', 'A safety feature'],
    correctAnswer: 1,
    explanation: 'A consistent wrist lock ensures that the relationship between the arm and the pistol remains identical for every shot.'
  },
  {
    id: 'q215',
    question: 'What is "Narrow Internal Focus" in shooting?',
    options: ['Thinking about what to eat for dinner', 'Focusing intensely on a specific technical feeling, like the trigger pressure', 'Looking at the crowd', 'Listening to music'],
    correctAnswer: 1,
    explanation: 'Narrow internal focus allows the shooter to monitor and fine-tune the subtle physical sensations required for a perfect shot.'
  },
  {
    id: 'q216',
    question: 'What is the "Natural Point of Aim" (NPA) check?',
    options: ['Closing your eyes and checking if the sights align with the target upon opening', 'Checking the weight of the pistol', 'Looking at the wind flags', 'Adjusting the rear sight'],
    correctAnswer: 0,
    explanation: 'NPA check ensures your body is naturally aligned with the target, reducing the need for muscle correction.'
  },
  {
    id: 'q217',
    question: 'How should you adjust your horizontal NPA?',
    options: ['By moving your arm', 'By moving your feet', 'By adjusting the sights', 'By leaning your body'],
    correctAnswer: 1,
    explanation: 'Horizontal NPA is adjusted by pivoting your entire body around the lead foot or moving both feet.'
  },
  {
    id: 'q218',
    question: 'What is the "Stability Window"?',
    options: ['The time between matches', 'The optimal period of stability during a hold (usually 5-10s)', 'A literal window on the range', 'The size of the target'],
    correctAnswer: 1,
    explanation: 'The stability window is the peak period of stillness before fatigue and oxygen debt set in.'
  },
  {
    id: 'q219',
    question: 'What is "Area Aiming"?',
    options: ['Aiming at the whole range', 'Accepting natural movement within a small area rather than a single point', 'Aiming at the white part of the target', 'Closing both eyes'],
    correctAnswer: 1,
    explanation: 'Area aiming reduces the psychological pressure to be perfectly still, which often leads to better trigger execution.'
  },
  {
    id: 'q220',
    question: 'What is "Milking the Grip"?',
    options: ['Cleaning the grip', 'Sympathetic movement of the lower fingers during trigger pull', 'Adding weight to the grip', 'Changing the grip angle'],
    correctAnswer: 1,
    explanation: 'Milking the grip is a common error where the lower fingers tighten as the trigger is pulled, disturbing the sights.'
  },
  {
    id: 'q221',
    question: 'What is the "Surprise Break"?',
    options: ['The pistol breaking', 'The shot firing without a conscious "now" command from the brain', 'A sudden noise on the range', 'Missing the target'],
    correctAnswer: 1,
    explanation: 'A surprise break prevents the shooter from flinching or jerking the trigger in anticipation of the shot.'
  },
  {
    id: 'q222',
    question: 'What is "Calling the Shot"?',
    options: ['Yelling when you fire', 'Predicting the shot location based on the sight picture at the moment of the break', 'Telling the RO your score', 'Asking for a protest'],
    correctAnswer: 1,
    explanation: 'Calling the shot is a vital skill for diagnosing technical errors and building self-awareness.'
  },
  {
    id: 'q223',
    question: 'What is the "Trigger Reset"?',
    options: ['Turning the pistol off', 'Allowing the trigger to move forward to engage the sear for the next shot', 'Adjusting trigger weight', 'Cleaning the trigger'],
    correctAnswer: 1,
    explanation: 'Proper trigger reset is essential for consistent follow-up shots and maintaining a steady grip.'
  },
  {
    id: 'q224',
    question: 'What is "Sight Alignment"?',
    options: ['Looking at the target', 'The relationship between the front and rear sights', 'Adjusting the sights for wind', 'Cleaning the sights'],
    correctAnswer: 1,
    explanation: 'Sight alignment is the most critical technical factor in precision shooting.'
  },
  {
    id: 'q225',
    question: 'What is "Sight Picture"?',
    options: ['A photo of the sights', 'The relationship between the aligned sights and the target', 'The color of the sights', 'The size of the rear notch'],
    correctAnswer: 1,
    explanation: 'Sight picture is the final aiming stage where the aligned sights are placed in the aiming area.'
  },
  {
    id: 'q226',
    question: 'Which is more important: Sight Alignment or Sight Picture?',
    options: ['Sight Alignment', 'Sight Picture', 'They are equally important', 'Neither'],
    correctAnswer: 0,
    explanation: 'Angular error from poor sight alignment causes much larger misses than parallel shift from poor sight picture.'
  },
  {
    id: 'q227',
    question: 'What is "Angular Error"?',
    options: ['A math mistake', 'Error caused by misalignment of the front and rear sights', 'Error caused by the wind', 'Error caused by the pellet weight'],
    correctAnswer: 1,
    explanation: 'Angular error is magnified over distance; a 1mm error at the sights can be a 10cm error at the target.'
  },
  {
    id: 'q228',
    question: 'What is "Parallel Shift"?',
    options: ['Moving the whole pistol sideways while sights remain aligned', 'Changing your stance', 'The pellet moving in the wind', 'The target moving'],
    correctAnswer: 0,
    explanation: 'Parallel shift causes much smaller errors than angular error, which is why sight alignment is prioritized.'
  },
  {
    id: 'q229',
    question: 'What is "Canting"?',
    options: ['Cleaning the pistol', 'Tilting the pistol to the left or right', 'Dropping the pistol', 'Adjusting the trigger'],
    correctAnswer: 1,
    explanation: 'Canting changes the relationship between the sights and the bore, leading to horizontal and vertical errors.'
  },
  {
    id: 'q230',
    question: 'What is the "Natural Respiratory Pause"?',
    options: ['Holding your breath until you pass out', 'The natural stillness after exhalation', 'Breathing fast during a match', 'Gasping for air'],
    correctAnswer: 1,
    explanation: 'The natural respiratory pause is the most stable time to execute a shot.'
  },
  {
    id: 'q231',
    question: 'How should you breathe during the shot process?',
    options: ['Hold your breath as long as possible', 'Take deep breaths, then settle into a natural pause', 'Breathe normally throughout', 'Pant to get more oxygen'],
    correctAnswer: 1,
    explanation: 'Controlled breathing oxygenates the blood and helps the body settle into a stable hold.'
  },
  {
    id: 'q232',
    question: 'What is "Trigger Freeze"?',
    options: ['The trigger getting cold', 'Inability to pull the trigger due to mental block or over-focus', 'A broken trigger', 'Firing too fast'],
    correctAnswer: 1,
    explanation: 'Trigger freeze is often caused by the brain refusing to fire because the sight picture isn\'t "perfect".'
  },
  {
    id: 'q233',
    question: 'What is "Positive Self-Talk"?',
    options: ['Talking to your pistol', 'Using encouraging internal dialogue to maintain confidence', 'Yelling at the target', 'Singing during a match'],
    correctAnswer: 1,
    explanation: 'Positive self-talk helps manage anxiety and keeps the shooter focused on the process.'
  },
  {
    id: 'q234',
    question: 'What is "Process over Outcome"?',
    options: ['Focusing on the score', 'Focusing on the execution of the shot rather than the result', 'Ignoring the rules', 'Thinking about the trophy'],
    correctAnswer: 1,
    explanation: 'Focusing on the process reduces pressure and leads to more consistent, high-quality shots.'
  },
  {
    id: 'q235',
    question: 'What is "Visualization"?',
    options: ['Watching TV', 'Mentally rehearsing the perfect shot process', 'Looking at the target', 'Dreaming about winning'],
    correctAnswer: 1,
    explanation: 'Mental rehearsal reinforces the neural pathways needed for successful execution.'
  },
  {
    id: 'q236',
    question: 'How do you handle a "Flyer"?',
    options: ['Get angry', 'Analyze the cause calmly, then reset for the next shot', 'Quit the match', 'Change your sights immediately'],
    correctAnswer: 1,
    explanation: 'A flyer is just data; analyze it, learn from it, and move on immediately.'
  },
  {
    id: 'q237',
    question: 'What is the "Shot Routine"?',
    options: ['Cleaning the pistol', 'A consistent sequence of physical and mental steps for every shot', 'A workout plan', 'The score sheet'],
    correctAnswer: 1,
    explanation: 'A solid routine automates the process and provides a sense of control under pressure.'
  },
  {
    id: 'q238',
    question: 'What is the "Mindfulness" in shooting?',
    options: ['Thinking about your score', 'Being fully present and focused on the current moment', 'Worrying about the next match', 'Remembering your last mistake'],
    correctAnswer: 1,
    explanation: 'Mindfulness helps the shooter stay in the "now" and avoid distractions.'
  },
  {
    id: 'q239',
    question: 'What is the "Flow State"?',
    options: ['A state of effortless focus and peak performance', 'Drinking water', 'Moving between firing points', 'The wind blowing'],
    correctAnswer: 0,
    explanation: 'Flow is the "zone" where execution becomes intuitive and automatic.'
  },
  {
    id: 'q240',
    question: 'How does hydration affect shooting?',
    options: ['It doesn\'t', 'Improves concentration and reduces muscle tremors', 'Makes you fire faster', 'Changes the sight alignment'],
    correctAnswer: 1,
    explanation: 'Even mild dehydration can significantly degrade fine motor control and focus.'
  },
  {
    id: 'q241',
    question: 'How does caffeine affect most shooters?',
    options: ['Improves focus', 'Increases heart rate and can cause tremors', 'Makes them stronger', 'No effect'],
    correctAnswer: 1,
    explanation: 'While it may improve alertness, caffeine often increases the "wobble" and heart rate.'
  },
  {
    id: 'q242',
    question: 'Why is core strength important for shooters?',
    options: ['To look good', 'Provides a stable platform and reduces body sway', 'To lift heavy weights', 'To breathe faster'],
    correctAnswer: 1,
    explanation: 'A strong core is essential for maintaining a consistent, upright posture during the hold.'
  },
  {
    id: 'q243',
    question: 'What is the benefit of cardiovascular exercise?',
    options: ['Lower resting heart rate', 'Bigger muscles', 'Faster running', 'Better hearing'],
    correctAnswer: 0,
    explanation: 'A lower heart rate means fewer "heartbeat jumps" during the stability window.'
  },
  {
    id: 'q244',
    question: 'Why is stretching important?',
    options: ['To get taller', 'Prevents stiffness and helps maintain a relaxed posture', 'To fire better next time', 'It isn\'t important'],
    correctAnswer: 1,
    explanation: 'Shooting involves static tension; stretching helps muscles recover and stay flexible.'
  },
  {
    id: 'q245',
    question: 'What is the "Hold Endurance" training?',
    options: ['Holding the pistol for 5 seconds', 'Holding the pistol for longer than a normal shot to build strength', 'Holding the pistol with two hands', 'Holding the pistol while running'],
    correctAnswer: 1,
    explanation: 'Hold endurance builds the specific muscles needed for a stable 60-shot match.'
  },
  {
    id: 'q246',
    question: 'What is the "1.5x Rule" in training?',
    options: ['Firing 1.5x more shots', 'Training with a weight 1.5x heavier than the pistol', 'Resting 1.5x longer than you shoot', 'Aiming for 1.5x the score'],
    correctAnswer: 1,
    explanation: 'Training with a slightly heavier weight (or longer holds) makes the competition pistol feel lighter and more stable.'
  },
  {
    id: 'q247',
    question: 'What is the maximum weight for an Olympic Air Pistol?',
    options: ['1.0 kg', '1.5 kg', '2.0 kg', 'No limit'],
    correctAnswer: 1,
    explanation: 'ISSF rules limit the total weight of the pistol (including accessories) to 1.5 kg.'
  },
  {
    id: 'q248',
    question: 'What is the minimum trigger weight for Air Pistol?',
    options: ['250g', '500g', '1000g', 'No limit'],
    correctAnswer: 1,
    explanation: 'The trigger must be able to support a 500g weight without firing.'
  },
  {
    id: 'q249',
    question: 'What is the standard distance for Air Pistol?',
    options: ['5 meters', '10 meters', '25 meters', '50 meters'],
    correctAnswer: 1,
    explanation: 'Olympic Air Pistol is fired at a distance of 10 meters.'
  },
  {
    id: 'q250',
    question: 'What caliber is used in standard Air Pistol?',
    options: ['.177 (4.5mm)', '.22 (5.5mm)', '.25 (6.35mm)', '9mm'],
    correctAnswer: 0,
    explanation: '.177 caliber (4.5mm) lead pellets are the universal standard for air pistol.'
  },
  {
    id: 'q251',
    question: 'How many shots are in a standard qualification match?',
    options: ['30', '40', '60', '100'],
    correctAnswer: 2,
    explanation: 'Both men and women fire 60 shots in the qualification round of Olympic Air Pistol.'
  },
  {
    id: 'q252',
    question: 'What is the time limit for a 60-shot match (electronic targets)?',
    options: ['60 minutes', '75 minutes', '90 minutes', '120 minutes'],
    correctAnswer: 1,
    explanation: '75 minutes is the standard time limit for 60 shots on electronic targets.'
  },
  {
    id: 'q253',
    question: 'What is the highest score possible for a single shot (decimal)?',
    options: ['10', '10.5', '10.9', '11'],
    correctAnswer: 2,
    explanation: '10.9 is a perfect center hit on an electronic target.'
  },
  {
    id: 'q254',
    question: 'What happens if you fire before the "Start" command?',
    options: ['Nothing', 'The shot is disqualified (scored as zero)', 'You are disqualified from the match', 'You get a warning'],
    correctAnswer: 1,
    explanation: 'Any shot fired before the official start command is recorded as a zero.'
  },
  {
    id: 'q255',
    question: 'What is the "Load" command?',
    options: ['Put your gear on the bench', 'Insert a pellet into the breech', 'Pick up the pistol', 'Start firing'],
    correctAnswer: 1,
    explanation: 'The "Load" command allows shooters to prepare their first shot.'
  },
  {
    id: 'q256',
    question: 'What is the "Cease Fire" command?',
    options: ['Stop shooting immediately', 'Finish your current shot', 'Unload your pistol', 'Leave the range'],
    correctAnswer: 0,
    explanation: ' "Cease Fire" (or "Unload") means all firing must stop instantly for safety.'
  },
  {
    id: 'q257',
    question: 'What is a "Safety Flag" (CBI)?',
    options: ['A flag on the range', 'A plastic insert that shows the barrel is empty', 'A red hat', 'A warning sign'],
    correctAnswer: 1,
    explanation: 'A CBI (Clear Barrel Indicator) is mandatory whenever the pistol is not in use on the line.'
  },
  {
    id: 'q258',
    question: 'Where should the muzzle ALWAYS be pointed?',
    options: ['At the floor', 'At the ceiling', 'Downrange or in a safe direction', 'At your feet'],
    correctAnswer: 2,
    explanation: 'Muzzle awareness is the most fundamental rule of firearm safety.'
  },
  {
    id: 'q259',
    question: 'Can you handle a pistol when someone is downrange?',
    options: ['Yes, if it\'s unloaded', 'Yes, if the action is open', 'No, never', 'Only if the RO says so'],
    correctAnswer: 2,
    explanation: 'Handling any firearm while people are downrange is strictly prohibited.'
  },
  {
    id: 'q260',
    question: 'What is the first thing you do when picking up a pistol?',
    options: ['Check if it\'s loaded', 'Point it in a safe direction and check the action', 'Pull the trigger', 'Adjust the sights'],
    correctAnswer: 1,
    explanation: 'Always verify the safety status of any firearm immediately upon handling it.'
  },
  {
    id: 'q261',
    question: 'What is "Proprioception" in shooting?',
    options: ['The sense of the relative position of body parts', 'The speed of the pellet', 'The weight of the pistol', 'The color of the target'],
    correctAnswer: 0,
    explanation: 'Proprioception is vital for maintaining a consistent stance and grip without looking.'
  },
  {
    id: 'q262',
    question: 'What is the "Balance of the Pistol"?',
    options: ['The total weight', 'The distribution of weight (center of gravity)', 'The cost of the pistol', 'The size of the grip'],
    correctAnswer: 1,
    explanation: 'A well-balanced pistol reduces muscle strain and improves stability.'
  },
  {
    id: 'q263',
    question: 'What are "Counterweights"?',
    options: ['Weights used to balance the pistol', 'The other shooters', 'The score sheet', 'The air cylinder'],
    correctAnswer: 0,
    explanation: 'Counterweights can be added to the barrel or frame to customize the pistol\'s balance.'
  },
  {
    id: 'q264',
    question: 'What is "Barrel Time"?',
    options: ['How long it takes to clean the barrel', 'The time the pellet spends inside the barrel after the shot breaks', 'The age of the barrel', 'The length of the barrel'],
    correctAnswer: 1,
    explanation: 'A shorter barrel time reduces the chance of the shooter disturbing the shot after the break.'
  },
  {
    id: 'q265',
    question: 'What is "Muzzle Jump"?',
    options: ['The pistol falling', 'The upward movement of the muzzle during the shot', 'The pellet jumping', 'The shooter jumping'],
    correctAnswer: 1,
    explanation: 'Minimizing muzzle jump through proper grip and compensators improves follow-through.'
  }
];

export const DRILLS: Drill[] = [
  {
    id: 'drill-1',
    title: 'The White Wall Drill',
    description: 'A classic dry-fire exercise to master trigger control without target distraction. Focus exclusively on sight alignment.',
    type: 'Dry Fire',
    difficulty: 'Beginner',
    steps: [
      'Stand 2-3 meters from a plain white wall.',
      'Adopt your standard shooting stance.',
      'Focus intensely on the front sight blade.',
      'Smoothly pull the trigger while keeping the front sight perfectly still.',
      'Observe any movement of the sights during the "shot".',
      'Repeat 20 times per set.'
    ],
    targetSuccess: 95,
    imageUrl: '/assets/wall-hold.png'
  },
  {
    id: 'drill-2',
    title: 'Precision Holding Drill',
    description: 'Build strength endurance and stability through timed holds. Essential for establishing a stable baseline.',
    type: 'Stability',
    difficulty: 'Intermediate',
    steps: [
      'Assume your Olympic stance and anchor your left hand in your pocket.',
      'Lift the pistol above the target with a deep breath.',
      'Lower to the target while aligning sights and exhaling halfway.',
      'Hold the pistol as steady as possible for 45-60 seconds.',
      'Focus intensely on the front sight throughout the entire hold.',
      'Rest for 60 seconds and repeat for 10-15 sets.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/wall-hold.png'
  },
  {
    id: 'drill-3',
    title: 'Consistent Grip Pressure',
    description: 'Master the "handshake" grip and avoid "milking" the grip during trigger execution. Maintain 100% consistent pressure.',
    type: 'Dry Fire',
    difficulty: 'Intermediate',
    steps: [
      'Adopt your standard shooting stance and take a firm "handshake" grip.',
      'Apply pressure primarily from the front and back (the "V" of the hand).',
      'Maintain 100% consistent pressure throughout the entire aiming process.',
      'Slowly execute a dry-fire shot while focusing on keeping the other fingers still.',
      'If you feel any change in grip pressure as the trigger moves, the attempt is a failure.',
      'Visual Cue: The knuckles of your middle, ring, and pinky fingers should NOT move.',
      'Repeat 20 times.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/grip.png'
  },
  {
    id: 'drill-4',
    title: 'The 0.2s Trigger Freeze',
    description: 'Focus on "Cleanness of Triggering" by observing the front sight in the final 200ms before the shot.',
    type: 'Dry Fire',
    difficulty: 'Advanced',
    steps: [
      'Aim at a specific point on the wall.',
      'Execute a slow, deliberate trigger pull.',
      'Call the shot: Did the front sight move in the final 0.2s?',
      'If the sight jumped, the attempt is a failure.',
      'Goal: 10 consecutive "still" releases.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/sight-picture.png'
  },
  {
    id: 'drill-5',
    title: 'Timing Optimization',
    description: 'Practice releasing the shot during your "Stability Window" (usually 5-8 seconds into the hold).',
    type: 'Dry Fire',
    difficulty: 'Intermediate',
    steps: [
      'Raise the pistol and settle into the aiming area.',
      'Identify the moment your hold is most stable (usually 5-8 seconds in).',
      'Commit to the trigger pull during this peak stability window.',
      'Abort the shot if you pass 10 seconds without a release.',
      'Repeat 15 times.'
    ],
    targetSuccess: 85,
    imageUrl: '/assets/sight-picture.png'
  },
  {
    id: 'drill-6',
    title: 'Surprise Break & Trigger Control',
    description: 'Master the smooth execution of the trigger pull with a focus on a surprise break and calling the shot.',
    type: 'Dry Fire',
    difficulty: 'Intermediate',
    steps: [
      'Adopt your standard shooting stance and take a firm "handshake" grip.',
      'Focus intensely on the front sight blade, ensuring perfect alignment with the rear sight.',
      'Begin applying constant, increasing pressure to the trigger.',
      'Maintain steady sight alignment throughout the entire pull, resisting the urge to "time" the shot.',
      'The shot should "surprise" you when it breaks; if you flinch or jerk, the attempt is a failure.',
      'Call the shot: Immediately after the break, identify where the front sight was positioned.',
      'Repeat 20 times per set.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/sight-picture.png'
  },
  {
    id: 'drill-7',
    title: 'Olympic Stance & Grip Mastery',
    description: 'Refine your physical platform by following the professional stance and grip techniques from the Olympic Shooting series.',
    type: 'Stability',
    difficulty: 'Beginner',
    steps: [
      'Adopt the 45-degree Olympic stance.',
      'Ensure your weight is balanced and your non-shooting hand is secured.',
      'Establish a high, firm grip as shown in the training modules.',
      'Hold the position for 30 seconds, checking for any muscle tension.',
      'Repeat 10 times, focusing on consistent hand placement.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/stance.png'
  },
  {
    id: 'drill-8',
    title: 'Sighting & Trigger Coordination',
    description: 'Practice the critical relationship between front sight focus and smooth trigger execution.',
    type: 'Trigger Control',
    difficulty: 'Intermediate',
    steps: [
      'Focus 100% on the front sight blade.',
      'Begin a slow, continuous trigger pull while maintaining perfect alignment.',
      'Ensure the shot "surprises" you when it breaks.',
      'Call the shot immediately after the break.',
      'Repeat 20 times, aiming for zero movement of the front sight.'
    ],
    targetSuccess: 95,
    imageUrl: '/assets/sight-picture.png'
  },
  {
    id: 'drill-9',
    title: 'Breathing Control Drill',
    description: 'Sync your breathing with your shot cycle to achieve maximum stability during the respiratory pause.',
    type: 'Stability',
    difficulty: 'Beginner',
    steps: [
      'Take two deep breaths while lifting the pistol.',
      'Exhale halfway as you settle into the aiming area.',
      'Hold the respiratory pause for 6-10 seconds.',
      'Focus on the stillness of your core.',
      'Abort if the shot isn\'t fired within the window.',
      'Repeat 15 times.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-10',
    title: 'Advanced Trigger Press',
    description: 'Master the smooth, continuous trigger press for a perfect surprise break.',
    type: 'Trigger Control',
    difficulty: 'Intermediate',
    steps: [
      'Establish a perfect grip with the index finger free.',
      'Apply constant, increasing pressure straight to the rear.',
      'Maintain front sight focus throughout the entire press.',
      'Ensure the break is a complete surprise.',
      'Repeat 20 times, dry fire.'
    ],
    targetSuccess: 95,
    imageUrl: '/assets/grip.png'
  },
  {
    id: 'drill-11',
    title: 'Follow Through Mastery',
    description: 'Develop the habit of staying in the shot after the break to ensure perfect execution and feedback.',
    type: 'Dry Fire',
    difficulty: 'Intermediate',
    steps: [
      'Execute a dry fire shot.',
      'Keep the sights aligned and focus on the front sight for 2 seconds AFTER the click.',
      'Call the shot: Where was the front sight at the moment of the break?',
      'Visualize the recoil path.',
      'Repeat 20 times.'
    ],
    targetSuccess: 90,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-12',
    title: 'Mental Visualization Routine',
    description: 'Program your mind for success by visualizing the perfect shot process.',
    type: 'Dry Fire',
    difficulty: 'Advanced',
    steps: [
      'Close your eyes and visualize your full shot routine.',
      'See the sights align perfectly.',
      'Feel the smooth trigger press.',
      'Hear the shot break and see the 10-ring hit.',
      'Perform this 5 times before starting your physical practice.'
    ],
    targetSuccess: 100,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-13',
    title: 'Structured Dry Fire Session',
    description: 'A comprehensive dry fire routine to build muscle memory and consistency.',
    type: 'Dry Fire',
    difficulty: 'Intermediate',
    steps: [
      'Perform 10 stance and grip checks.',
      'Perform 10 wall-hold drills (30 seconds each).',
      'Perform 20 trigger control repetitions with front sight focus.',
      'Combine into 10 full shot cycles.',
      'Total time: 15-20 minutes.'
    ],
    targetSuccess: 95,
    imageUrl: '/assets/wall-hold.png'
  },
  {
    id: 'drill-14',
    title: 'Live Fire Focus Drill',
    description: 'Maintain your technical focus when transitioning to live ammunition.',
    type: 'Live Fire',
    difficulty: 'Advanced',
    steps: [
      'Perform 5 dry fire shots to establish focus.',
      'Load one pellet and fire one live shot, maintaining the exact same process.',
      'Call the shot immediately.',
      'Analyze the difference between the dry and live shot.',
      'Repeat the 5 dry / 1 live cycle 5 times.'
    ],
    targetSuccess: 85,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-15',
    title: 'Timing of Triggering',
    description: 'Master the precision of releasing the shot at the exact moment your aiming point is closest to the center of the target.',
    type: 'Trigger Control',
    difficulty: 'Advanced',
    steps: [
      'Assume your standard shooting stance and settle into the aiming area.',
      'Focus intensely on the front sight while allowing the target to be slightly blurred.',
      'Observe the natural movement of your aiming point within the target area.',
      'Begin a smooth, continuous trigger press as you approach the center.',
      'Release the shot precisely when the aiming point is at its most centered position.',
      'Maintain follow-through for 2 seconds after the shot breaks.',
      'Repeat 15 times, aiming for a 90% success rate.'
    ],
    visualCues: {
      correct: 'The shot breaks while the sights are centered in the aiming area. The front sight remains sharp and still.',
      incorrect: 'Jerking the trigger as the sights approach the center, causing the front sight to jump or dip.'
    },
    targetSuccess: 90,
    imageUrl: '/assets/sight-picture.png'
  },
  {
    id: 'drill-16',
    title: 'Grip Pressure Consistency',
    description: 'Develop a rock-solid, unwavering grip that remains identical from the moment of lift through the follow-through.',
    type: 'Grip',
    difficulty: 'Intermediate',
    steps: [
      'Establish your grip: 60-70% pressure with the lower three fingers straight back.',
      'Lift the pistol and settle into the aiming area.',
      'Execute a dry-fire shot while maintaining 100% constant pressure.',
      'The goal is to feel zero sympathetic movement in the other fingers.',
      'Repeat 20 times, focusing on the sensation of a "frozen" hand.'
    ],
    visualCues: {
      correct: 'Knuckles remain perfectly still as the trigger finger moves. The hand feels like a solid, unmoving block.',
      incorrect: 'Knuckles move, tighten, or "pulse" when the trigger is pulled. This is "milking" and disturbs sight alignment.'
    },
    targetSuccess: 90,
    imageUrl: '/assets/grip.png'
  },
  {
    id: 'drill-17',
    title: 'Aiming Accuracy (COG HIT)',
    description: 'Maximize your score by keeping the aiming point centered on the target. Scientific data from the Science Hub shows that COG (Center of Gravity) hits have the highest impact on overall performance.',
    type: 'Stability',
    difficulty: 'Advanced',
    steps: [
      'Assume your stance and settle into the aiming area.',
      'Focus on the front sight, keeping it perfectly aligned within the rear sight notch.',
      'Observe the natural sway and consciously guide the aiming point toward the absolute center.',
      'Hold the center position for 5 seconds before simulated release.',
      'Repeat 20 times, aiming for perfect centering in every "shot".',
      'Analyze your stability patterns and minimize the diameter of your movement.'
    ],
    visualCues: {
      correct: 'The aiming point remains within the inner 10-ring area throughout the hold. Movement is minimal and controlled.',
      incorrect: 'The aiming point drifts outside the center area or shows erratic, jerky movements.'
    },
    targetSuccess: 95,
    imageUrl: '/assets/stability.png'
  },
  {
    id: 'drill-18',
    title: 'Respiratory Pause Mastery',
    description: 'Learn to stabilize your hold during the natural pause after exhalation.',
    type: 'Stability',
    difficulty: 'Intermediate',
    steps: [
      'Lift pistol while inhaling deeply.',
      'Lower to target while exhaling halfway.',
      'Hold the natural respiratory pause for 8-10 seconds.',
      'Execute a dry fire shot during this window of maximum stability.',
      'Abort the shot if the pause exceeds 12 seconds to avoid CO2 buildup.'
    ],
    visualCues: {
      correct: 'Steady hold with minimal vertical movement during the pause.',
      incorrect: 'Gasping or forced breath hold causing muscle tremors.'
    },
    targetSuccess: 90,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-19',
    title: 'Distraction Recovery',
    description: 'Train your mind to reset after a sudden noise or distraction.',
    type: 'Mental',
    difficulty: 'Advanced',
    steps: [
      'Settle into the aiming area and begin your trigger prep.',
      'Simulate a distraction (sudden noise or flash).',
      'Immediately lower the pistol and step back from the line.',
      'Take one deep "cleansing" breath and reset your mental state.',
      'Re-lift and execute a perfect dry fire shot within 30 seconds.'
    ],
    visualCues: {
      correct: 'Immediate, calm reset without signs of frustration or rushing.',
      incorrect: 'Attempting to "power through" the distraction and rushing the shot.'
    },
    targetSuccess: 85,
    imageUrl: '/assets/prepare-for-shot.png'
  },
  {
    id: 'drill-20',
    title: 'Pistol Deep Clean & Inspection',
    description: 'Ensure your equipment is in peak condition for competition.',
    type: 'Maintenance',
    difficulty: 'Beginner',
    steps: [
      'Check the air cylinder expiry date (must be within 10 years).',
      'Clean the barrel using dry felt pellets.',
      'Inspect the grip for any loose screws or cracks.',
      'Verify trigger weight using a standard 500g weight.',
      'Check the sights for any debris or loose adjustment clicks.'
    ],
    visualCues: {
      correct: 'Smooth trigger action and crisp, clean sight picture.',
      incorrect: 'Loose grip screws or debris in the rear sight notch.'
    },
    targetSuccess: 100,
    imageUrl: '/assets/grip.png'
  }
];
