	import javax.swing.*;
	import java.awt.*;
	
	public class test {
	private JFrame Office;
	private JPanel Interface;
	private JButton Continue:
	private JLabel Text;
	
	public test() {
	
	gui();
	
	} 
	public static void mian(string[] args) {
	new test();
	}
	
	public void gui(){
	
	Office = new JFrame("Office");
	Office.setVisible(true);
	Office.setSize(600,400);
	Office.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	
	Interface = new JPanel ();
	Interface.setBackground(Color.WHITE);
	
	Continue = new JButton("Open");
	Text = new JLabel("Open Office");
	
	Interface.add(Continue);
	Interface.add(Text);
	
	Office.add(Interface);
	}
	
	
	
	
	
	
	}