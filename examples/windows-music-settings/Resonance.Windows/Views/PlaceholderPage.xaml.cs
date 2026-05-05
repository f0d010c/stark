using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;

namespace Resonance.Views;

public sealed partial class PlaceholderPage : Page
{
    public PlaceholderPage() => InitializeComponent();

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        if (e.Parameter is string tag)
        {
            HeaderText.Text = tag switch
            {
                "library"  => "Library",
                "browse"   => "Browse",
                "radio"    => "Radio",
                "recent"   => "Recently Added",
                "madefor"  => "Made for You",
                _          => "Section"
            };
        }
    }
}
